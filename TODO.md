# TODO

## Plan checklist (API hardcoded localhost removal)
- [ ] Replace ripgrep search workaround by scanning files for `localhost` occurrences manually via targeted reads/edits (since ripgrep unavailable).
- [ ] Create centralized env validation + api base config.
- [x] Create/adjust `src/config/api.js` to only read `import.meta.env.VITE_API_URL` and error loudly if missing.

- [x] Create/adjust `src/services/api.js` to use `VITE_API_URL` with no localhost fallback and central axios instance.

- [x] Remove any hardcoded `http://localhost:5000/api` and `localhost/127.0.0.1` usage from components/services.

- [x] Remove hardcoded localhost fallback in `src/utils/mediaUrl.js`.


- [x] Fix `GoogleLoginButton` and any other OAuth URLs to use the env var.

- [ ] Audit auth/profile/register/login/forgot-password and ensure all use axios baseURL.
- [ ] Verify medicines, pharmacies, reports services use axios instance (no absolute URLs).
- [ ] Add temporary console logging of configured API url (optional; remove if not desired).
- [ ] Final verification: ensure **zero** occurrences of `localhost` and no hardcoded API URLs remain.

