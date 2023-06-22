export const NAME_REGEX = /^[a-zA-Z\s]{1,40}$/; // max 40 characters
export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // email format
export const MESSAGE_REGEX = /^(?:.|\n){1,500}$/; // max 500 characters
export const SUBJECT_REGEX = /^(?:\b\w+\b[ ]*){1,10}$/; // max 10 words
