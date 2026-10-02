alter function public.hris_has_permission(text)
  security definer;

alter function public.hris_has_permission(text)
  set search_path = public, pg_temp;

alter function public.hris_announcement_publish(uuid)
  security definer;

alter function public.hris_announcement_publish(uuid)
  set search_path = public, pg_temp;

alter function public.hris_announcement_archive(uuid)
  security definer;

alter function public.hris_announcement_archive(uuid)
  set search_path = public, pg_temp;

grant execute on function public.hris_has_permission(text) to authenticated;
grant execute on function public.hris_announcement_publish(uuid) to authenticated;
grant execute on function public.hris_announcement_archive(uuid) to authenticated;
