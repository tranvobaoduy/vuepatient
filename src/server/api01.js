import repository from '@/server/repository';
const resource = "/api01";
export default {
    lay_ds_luotkham() {
        return repository.get(`${resource}/lay_ds_luotkham`);
    },
   
}