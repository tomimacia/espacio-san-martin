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
  hasMetaTags?: boolean;
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
  archivado: boolean;
};
export type UserListedCoope = {
  Email: string;
  Nombre: string;
  Telefono: string;
  DNI: string;
  Cursos: string;
  Domicilio: string;
  FechaInscripcion: number;
  Turno: "Mañana" | "Tarde";
  Archivado: boolean;
};
export type UserListedFines = {
  Email: string;
  Nombre: string;
  Telefono: string;
  DNI: string;
  Sede: string;
  DondeDejaste: string;
  CUIL: string;
  Edad: number;
  Domicilio: string;
  TienePC: "Si" | "No";
  TieneWIFI: "Si" | "No";
  FechaInscripcion: number;
  Genero: string;
  Archivado: boolean;
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
  | "FechaInscripcion"
  | "Turno";

export type HeadersTypeCoope =
  | "Nombre"
  | "Cursos"
  | "Email"
  | "DNI"
  | "Telefono"
  | "Domicilio"
  | "FechaInscripcion"
  | "Turno";
export type HeadersTypeFines =
  | "Nombre"
  | "Genero"
  | "Email"
  | "DNI"
  | "Telefono"
  | "Domicilio"
  | "FechaInscripcion"
  | "Sede"
  | "TienePC"
  | "TieneWIFI"
  | "Edad"
  | "DondeDejaste"
  | "CUIL"
export type DeleteUserType = {
  username: string;
  curso?: string;
  DNI: string;
  collection:string,
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
  MainNoticia: MainNoticia;
  DateSeconds: number;
};
export type LinkItemType = {
  active: boolean;
  onClick: () => void;
  title: string;
};
type DBIMGType = {
  downloadURL: string;
  filePath: string;
};
type CardNoticiaType = {
  CardIMG: DBIMGType;
  CardIntro: string[];
  CardTitle: string;
};
type MainNoticia = {
  MainTitle: string;
  MainIMG: DBIMGType;
  MainBody: string[];
  MainSubtitle: string;
  MainImgFooter: string;
  Embed?: string;
};
export type CardCursoType = {
  CardIcon: DBIMGType;
  CardIntro: string;
  CardTitle: string;
};
export type MainCursoType = {
  MainTitle: string;
  MainIMG: DBIMGType;
  MainBody: string[];
  MainSubtitle: string;
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
export type CursoTypeDB = {
  Card: CardCursoType;
  Date: Timestamp;
  Main: MainCursoType;
  id: string;
  Sedes: CursoSede[];
};

export type CursoSede = {
  Titulo: string;
  Costo: [];
  FechaInicio: string | null;
  Duracion: string | null;
  Grupowhatsapp: string | null;
  IsAvailable: boolean;
};
export type NoticiaIntroType = {
  noticia: CardNoticiaType;
  id?: string;
  Date?: Timestamp;
  ind: number;
};
export type SedeTypeDB = {
  Titulo: string;
  Direccion: string;
  Localidad: string;
  Iframe: string;
  id?: string;
};
export type GetCursosHookType = {
  cursos: CursoTypeDB[];
  setCursos: (newNoticias: CursoTypeDB[]) => void;
  getCursos: () => void;
  loadingCursos: boolean;
};
export type RefSpanType = {
  id: string;
  height: string;
};
