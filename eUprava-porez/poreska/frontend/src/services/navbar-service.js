import authService from "./auth-service";

class NavbarService {
  poreskiRadnikLinks = [
    { url: "/nekretnine", text: "Nekretnine" },
    { url: "/uplate", text: "Uplate" },
    { url: "/gradjani", text: "Gradjani" },
  ];

  gradjaniLinks = [{ url: "/gradjani-uplate", text: "Uplate za gradjane" }];

  getAllowedNavbarLinks = () => {
    const role = authService.getRoleFromJwt();
    if (role === "ROLE_PORESKI_RADNIK") return this.poreskiRadnikLinks;
    else if (role === "ROLE_GRADJANIN") return this.gradjaniLinks;
    return [];
  };
}

export default new NavbarService();
