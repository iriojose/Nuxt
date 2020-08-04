
const header             = process.env.HEADER;
const http               = process.env.SERVE_REQUEST;
const data               = process.env.SERVICIO_DATA;
const auth               = process.env.SERVICIO_AUTH;
const image              = process.env.SERVICIO_IMAGES;
const imagen             = process.env.SERVICIO_IMAGEN;
const tenant_id          = process.env.TENANT_ID;
const nots               = process.env.SERVICIO_NOTS;
const key_notificaciones = process.env.KEY_NOTIFICACIONES;

console.log(header);

export default { image, data, auth, header, imagen, http,tenant_id,nots,key_notificaciones};