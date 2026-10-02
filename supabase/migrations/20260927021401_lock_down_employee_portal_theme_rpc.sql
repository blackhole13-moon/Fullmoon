revoke execute on function public.hris_get_employee_portal_theme() from public;
revoke execute on function public.hris_set_employee_portal_theme(text) from public;
grant execute on function public.hris_get_employee_portal_theme() to authenticated;
grant execute on function public.hris_set_employee_portal_theme(text) to authenticated;
