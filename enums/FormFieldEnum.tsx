// eslint-disable-next-line no-shadow
export enum FormFieldEnum {
  NAME = 'Nom et prénom',
  EMAIL = 'Email',
  CONTACT = 'Nous contacter',
}

type FormKeys = keyof typeof FormFieldEnum;
export type FormValues = typeof FormFieldEnum[FormKeys];
