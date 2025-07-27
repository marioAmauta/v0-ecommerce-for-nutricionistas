export class AppRoutes {
  static readonly homePage = "/";

  // Authentication routes
  static readonly loginPage = "/iniciar-sesion";
  static readonly resetPasswordPage = "/recuperar-contrasena";
  static readonly registerPage = "/registrarse";

  // Product routes
  static readonly productsPage = "/productos";
  static readonly productCategoryPage = ({ category }: { category: string }) => `${this.productsPage}/${category}`;
  static readonly productDetailPage = ({ id }: { id: number }) => `/producto/${id}`;

  // Legal pages
  static readonly termsPage = "/terminos";
  static readonly privacyPage = "/politica-de-privacidad";
}
