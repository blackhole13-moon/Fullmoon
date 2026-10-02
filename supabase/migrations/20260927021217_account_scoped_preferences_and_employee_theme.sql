begin;

create table if not exists public.hris_user_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  language text not null default 'id' check (language in ('id','en','ja','ko','zh')),
  theme text not null default 'sun' check (theme in ('sun','moon','galaxy','blackhole','nebula')),
  updated_at timestamptz not null default now()
);

create or replace function public.hris_user_preferences_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at=now();
  return new;
end;
$$;

drop trigger if exists trg_hris_user_preferences_updated_at on public.hris_user_preferences;
create trigger trg_hris_user_preferences_updated_at
before update on public.hris_user_preferences
for each row execute function public.hris_user_preferences_touch_updated_at();

alter table public.hris_user_preferences enable row level security;

drop policy if exists "hris_user_preferences_select_own" on public.hris_user_preferences;
create policy "hris_user_preferences_select_own" on public.hris_user_preferences for select to authenticated using (auth.uid()=user_id);
drop policy if exists "hris_user_preferences_insert_own" on public.hris_user_preferences;
create policy "hris_user_preferences_insert_own" on public.hris_user_preferences for insert to authenticated with check (auth.uid()=user_id);
drop policy if exists "hris_user_preferences_update_own" on public.hris_user_preferences;
create policy "hris_user_preferences_update_own" on public.hris_user_preferences for update to authenticated using (auth.uid()=user_id) with check (auth.uid()=user_id);

grant select, insert, update on public.hris_user_preferences to authenticated;

alter table public.hris_company_settings add column if not exists employee_portal_theme text not null default 'sun';
alter table public.hris_company_settings drop constraint if exists hris_company_settings_employee_portal_theme_check;
alter table public.hris_company_settings add constraint hris_company_settings_employee_portal_theme_check check (employee_portal_theme in ('sun','moon','galaxy','blackhole','nebula'));

create or replace function public.hris_get_employee_portal_theme()
returns text language plpgsql stable security definer set search_path=public
as $$
declare v_theme text;
begin
  select employee_portal_theme into v_theme from public.hris_company_settings where id=1;
  return case when v_theme in ('sun','moon','galaxy','blackhole','nebula') then v_theme else 'sun' end;
end;
$$;

create or replace function public.hris_set_employee_portal_theme(p_theme text)
returns void language plpgsql security definer set search_path=public
as $$
declare v_email text;
begin
  if p_theme not in ('sun','moon','galaxy','blackhole','nebula') then raise exception 'Tema Portal Karyawan tidak valid'; end if;
  v_email=lower(coalesce(auth.jwt()->>'email',''));
  if not exists (select 1 from public.hris_users where lower(email)=v_email and status='Aktif' and role='Super Admin') then
    raise exception 'Hanya Super Admin yang dapat mengubah tema Portal Karyawan';
  end if;
  update public.hris_company_settings set employee_portal_theme=p_theme, updated_at=now() where id=1;
  if not found then raise exception 'Pengaturan perusahaan dengan id=1 tidak ditemukan'; end if;
end;
$$;

grant execute on function public.hris_get_employee_portal_theme() to authenticated;
grant execute on function public.hris_set_employee_portal_theme(text) to authenticated;

commit;
