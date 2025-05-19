import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
    route("onerepmax", "routes/onerepmax.tsx"),
    route("bmr", "routes/bmr.tsx"),
    route("about", "routes/about.tsx"),
    route("login", "routes/login.tsx"),
    route("register", "routes/register.tsx"),
  ])
] satisfies RouteConfig;
