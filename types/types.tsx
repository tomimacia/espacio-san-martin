import { Timestamp } from "firebase/firestore";
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
  yaRegistrado?: boolean;
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
export type mapaType = {
  location: SedeTypeDB;
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
    imageFooter: string;
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
  FechaInscripcion: string;
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
  | "Domicilio"
  | "FechaInscripcion";
export type DeleteUserType = {
  username: string;
  curso: string;
  DNI: string;
  removeUser: () => void;
};
export type CursoStr = {
  title: string;
  subtitle: string;
  description: string[];
  imageFooter: string;
  img: string;
};
export type NoticiaStructureType = {
  title: string;
  subtitle: string;
  description: string[];
  imageFooter: string;
  img: string;
  DateSeconds: number;
};
export type LinkItemType = {
  active: boolean;
  onClick: () => void;
  title: string;
};
type NoticiaIMGType = {
  downloadURL: string;
  filePath: string;
};
type CardNoticiaType = {
  CardIMG: NoticiaIMGType;
  CardIntro: string[];
  CardTitle: string;
};
type MainNoticia = {
  MainTitle: string;
  MainIMG: NoticiaIMGType;
  MainBody: string[];
  MainSubtitle: string;
  MainImgFooter: string;
};
export type MainNoticiaType = {
  MainNoticia: MainNoticia;
  DateSeconds: number;
};
export type NoticiaTypeDB = {
  Card: CardNoticiaType;
  Date: Timestamp;
  Main: MainNoticia;
  id: string;
};
export type NoticiaIntroType = {
  noticia: CardNoticiaType;
  id?: string;
  Date?: Timestamp;
};
export type SedeTypeDB = {
  Titulo: string;
  Direccion: string;
  Localidad: string;
  Iframe: string;
  id?: string;
};
