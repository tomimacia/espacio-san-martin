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
