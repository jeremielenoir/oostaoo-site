/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    DateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    DateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  SortJobOffersBy: "id" | "startDate" | "title"
  SortOrder: "asc" | "desc"
  SortUsersBy: "email" | "id" | "name"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  JobOffer: { // root type
    authorId: number; // Int!
    id: string; // ID!
    linkedInLink?: string | null; // String
    place?: string | null; // String
    sector?: string | null; // String
    serviceId: number; // Int!
    startDate: NexusGenScalars['DateTime']; // DateTime!
    title: string; // String!
    visibility: boolean; // Boolean!
  }
  Mutation: {};
  Query: {};
  Service: { // root type
    description?: string | null; // String
    id: string; // ID!
    title: string; // String!
    visibility: string; // String!
  }
  Skill: { // root type
    description?: string | null; // String
    id: string; // ID!
    logo?: string | null; // String
    title: string; // String!
    visibility: string; // String!
  }
  User: { // root type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    password: string; // String!
    role: Array<number | null>; // [Int]!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  JobOffer: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    authorId: number; // Int!
    id: string; // ID!
    linkedInLink: string | null; // String
    place: string | null; // String
    sector: string | null; // String
    service: NexusGenRootTypes['Service'] | null; // Service
    serviceId: number; // Int!
    skills: NexusGenRootTypes['Skill'] | null; // Skill
    startDate: NexusGenScalars['DateTime']; // DateTime!
    title: string; // String!
    visibility: boolean; // Boolean!
  }
  Mutation: { // field return type
    createJobOffer: NexusGenRootTypes['JobOffer'] | null; // JobOffer
    createService: NexusGenRootTypes['Service'] | null; // Service
    createSkill: NexusGenRootTypes['Skill'] | null; // Skill
    createUser: NexusGenRootTypes['User'] | null; // User
    deleteJobOffer: NexusGenRootTypes['JobOffer'] | null; // JobOffer
    deleteService: NexusGenRootTypes['Service'] | null; // Service
    deleteSkill: NexusGenRootTypes['Skill'] | null; // Skill
    deleteUser: NexusGenRootTypes['User'] | null; // User
    updateJobOffer: NexusGenRootTypes['JobOffer'] | null; // JobOffer
    updateService: NexusGenRootTypes['Service'] | null; // Service
    updateSkill: NexusGenRootTypes['Skill'] | null; // Skill
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    jobOffer: NexusGenRootTypes['JobOffer'] | null; // JobOffer
    jobOffers: Array<NexusGenRootTypes['JobOffer'] | null> | null; // [JobOffer]
    service: NexusGenRootTypes['Service'] | null; // Service
    services: Array<NexusGenRootTypes['Service'] | null> | null; // [Service]
    skill: NexusGenRootTypes['Skill'] | null; // Skill
    skills: Array<NexusGenRootTypes['Skill'] | null> | null; // [Skill]
    user: NexusGenRootTypes['User'] | null; // User
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Service: { // field return type
    description: string | null; // String
    id: string; // ID!
    jobOffers: Array<NexusGenRootTypes['JobOffer'] | null> | null; // [JobOffer]
    title: string; // String!
    visibility: string; // String!
  }
  Skill: { // field return type
    description: string | null; // String
    id: string; // ID!
    jobOffers: Array<NexusGenRootTypes['JobOffer'] | null> | null; // [JobOffer]
    logo: string | null; // String
    title: string; // String!
    visibility: string; // String!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    jobOffers: Array<NexusGenRootTypes['JobOffer'] | null> | null; // [JobOffer]
    name: string; // String!
    password: string; // String!
    role: Array<number | null>; // [Int]!
  }
}

export interface NexusGenFieldTypeNames {
  JobOffer: { // field return type name
    author: 'User'
    authorId: 'Int'
    id: 'ID'
    linkedInLink: 'String'
    place: 'String'
    sector: 'String'
    service: 'Service'
    serviceId: 'Int'
    skills: 'Skill'
    startDate: 'DateTime'
    title: 'String'
    visibility: 'Boolean'
  }
  Mutation: { // field return type name
    createJobOffer: 'JobOffer'
    createService: 'Service'
    createSkill: 'Skill'
    createUser: 'User'
    deleteJobOffer: 'JobOffer'
    deleteService: 'Service'
    deleteSkill: 'Skill'
    deleteUser: 'User'
    updateJobOffer: 'JobOffer'
    updateService: 'Service'
    updateSkill: 'Skill'
    updateUser: 'User'
  }
  Query: { // field return type name
    jobOffer: 'JobOffer'
    jobOffers: 'JobOffer'
    service: 'Service'
    services: 'Service'
    skill: 'Skill'
    skills: 'Skill'
    user: 'User'
    users: 'User'
  }
  Service: { // field return type name
    description: 'String'
    id: 'ID'
    jobOffers: 'JobOffer'
    title: 'String'
    visibility: 'String'
  }
  Skill: { // field return type name
    description: 'String'
    id: 'ID'
    jobOffers: 'JobOffer'
    logo: 'String'
    title: 'String'
    visibility: 'String'
  }
  User: { // field return type name
    email: 'String'
    id: 'ID'
    jobOffers: 'JobOffer'
    name: 'String'
    password: 'String'
    role: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createJobOffer: { // args
      authorId: number; // Int!
      content: string; // String!
      linkedInLink?: string | null; // String
      place?: string | null; // String
      sector?: string | null; // String
      serviceId: number; // Int!
      startDate: NexusGenScalars['DateTime']; // DateTime!
      title: string; // String!
      visibility: boolean; // Boolean!
    }
    createService: { // args
      description?: string | null; // String
      title: string; // String!
      visibility: boolean; // Boolean!
    }
    createSkill: { // args
      description?: string | null; // String
      logo?: string | null; // String
      title: string; // String!
      visibility: boolean; // Boolean!
    }
    createUser: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
      role?: number | null; // Int
    }
    deleteJobOffer: { // args
      id: string; // ID!
    }
    deleteService: { // args
      id: string; // ID!
    }
    deleteSkill: { // args
      id: string; // ID!
    }
    deleteUser: { // args
      id: string; // ID!
    }
    updateJobOffer: { // args
      authorId?: number | null; // Int
      content?: string | null; // String
      id: string; // ID!
      linkedInLink?: string | null; // String
      place?: string | null; // String
      sector?: string | null; // String
      serviceId?: number | null; // Int
      startDate?: string | null; // String
      title?: string | null; // String
      visibility?: boolean | null; // Boolean
    }
    updateService: { // args
      description?: string | null; // String
      id: string; // ID!
      title?: string | null; // String
      visibility?: boolean | null; // Boolean
    }
    updateSkill: { // args
      description?: string | null; // String
      id: string; // ID!
      logo?: string | null; // String
      title?: string | null; // String
      visibility?: boolean | null; // Boolean
    }
    updateUser: { // args
      email?: string | null; // String
      id: string; // ID!
      name?: string | null; // String
      password?: string | null; // String
      role?: number | null; // Int
    }
  }
  Query: {
    jobOffer: { // args
      id: string; // String!
    }
    jobOffers: { // args
      limit: number | null; // Int
      offset?: number | null; // Int
      showPrivate?: boolean | null; // Boolean
      sortBy: NexusGenEnums['SortJobOffersBy'] | null; // SortJobOffersBy
      sortOrder: NexusGenEnums['SortOrder'] | null; // SortOrder
    }
    service: { // args
      id: string; // String!
    }
    services: { // args
      showPrivate?: boolean | null; // Boolean
      sortOrder: NexusGenEnums['SortOrder'] | null; // SortOrder
    }
    skill: { // args
      id: string; // String!
    }
    skills: { // args
      showPrivate?: boolean | null; // Boolean
      sortOrder: NexusGenEnums['SortOrder'] | null; // SortOrder
    }
    user: { // args
      id: string; // String!
    }
    users: { // args
      limit: number | null; // Int
      offset?: number | null; // Int
      sortBy: NexusGenEnums['SortUsersBy'] | null; // SortUsersBy
      sortOrder: NexusGenEnums['SortOrder'] | null; // SortOrder
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}