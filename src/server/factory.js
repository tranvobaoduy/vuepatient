import api01repository from '@/server/api01';
const responsitories = {
    api01: api01repository,

  };
  export default {
    get: name => responsitories[name]
  };