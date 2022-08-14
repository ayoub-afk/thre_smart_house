import { Sensor } from './sensor';

export interface ProfileUser {
  uid: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  phone?: string;
  address?: string;
  photoURL?: string;
  house?:Sensor[];
  ligthon?:boolean;
}
