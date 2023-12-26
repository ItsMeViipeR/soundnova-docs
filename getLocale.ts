import { withLocales } from "nextra/locales";
import { middleware } from "./middleware";

export const locale = withLocales(middleware)();
