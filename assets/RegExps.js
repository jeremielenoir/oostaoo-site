export const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // max 40 characters
export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // email format
export const MESSAGE_REGEX = /^(?:.|\n){1,500}$/; // max 500 characters
export const SUBJECT_REGEX = /^(?:.){1,75}$/; // max 75 characters
