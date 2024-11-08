import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((obj) => {
      createUser()
        .then((nms) => console.log(`${obj.body} ${nms.firstName} ${nms.lastName}`));
    })
    .catch(() => console.log('Signup system offline'));
}
