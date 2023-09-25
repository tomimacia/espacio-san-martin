import { ReactNode } from "react";

export type MainLayoutType = {
  children: ReactNode;
};

export type NavLinkType = {
  title: string;
  href: string;
  onClick?: () => void;
};
export type ArticleLayoutType = {
  children: ReactNode;
  headTitle: string;
  pageTitle?: string;
};
export type TextAndInputType = {
  name: string;
  title: string;
  placeholder: string;
  type: string;
  yaRegistrado: boolean;
};
export type LinkAndIconType = {
  href: string;
  title: string;
  children: JSX.Element;
};

export type NewBoxType = {
  Title: String;
  SubTitle: String;
  Day: String;
  Time: String;
};
export type mediaType = {
  dir: "row" | "column";
  size: number | undefined;
  colored?: boolean;
};
type locationType = {
  sede: string;
  direccion: string;
  localidad: string;
  iframe: string;
};
export type mapaType = {
  location: locationType;
};
export type CursoType = {
  img: string;
  title: string;
  description: string[];
  subtitle: string;
  route: string;
};
export type CursoNoteType = {
  Curso: {
    img: string;
    title: string;
    description: string;
    route: string;
  };
};
export type NoticiaType = {
  Noticia: {
    img: string;
    title: string;
    subtitle: string;
    description: string[];
    route: string;
  };
};
export type Curso = {
  Curso: CursoType;
};
export type UserDB = {
  Email: string;
  Nombre: string;
  Telefono: number | string;
  DNI: number | string;
  Cursos: CursoDB[];
  Domicilio: string;
  Nacimiento: string;
};
export type UserListed = {
  Email: string;
  Nombre: string;
  Telefono: string;
  DNI: string;
  Curso: string;
  Sede: string;
  Domicilio: string;
  Nacimiento: string;
};

export type CursoDB = {
  titulo: string;
  sede: string;
};
export type HeadersType =
  | "Nombre"
  | "Curso"
  | "Sede"
  | "Email"
  | "Nacimiento"
  | "DNI"
  | "Telefono"
  | "Domicilio";
export type DeleteUserType = {
  username: string;
  curso: string;
  DNI: string;
  removeUser: () => void;
};
