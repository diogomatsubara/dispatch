import { AuthLayout, DefaultLayout } from "@/components/layouts"

export const publicRoute = [
  {
    path: "*",
    component: () => import(/* webpackChunkName: "errors-404" */ "@/views/error/NotFound.vue")
  },
  {
    path: "/404",
    name: "404",
    meta: { title: "Not Found" },
    component: () => import(/* webpackChunkName: "errors-404" */ "@/views/error/NotFound.vue")
  },

  {
    path: "/500",
    name: "500",
    meta: { title: "Server Error" },
    component: () => import(/* webpackChunkName: "errors-500" */ "@/views/error/Error.vue")
  }
]

const enable_auth = false
export const protectedRoute = [
  {
    path: "/",
    component: DefaultLayout,
    meta: { title: "Incident Report", group: "incidents", icon: "" },
    redirect: "/incidents/report",
    children: [
      {
        path: "/403",
        name: "Forbidden",
        meta: { title: "Access Denied", hiddenInMenu: true },
        component: () => import(/* webpackChunkName: "error-403" */ "@/views/error/Deny.vue")
      }
    ]
  },
  {
    path: "/incidents/status",
    component: DefaultLayout,
    meta: { title: "Status", icon: "", requiresAuth: enable_auth },
    component: () => import(/* webpackChunkName: "incidents-status" */ "@/incident/Status.vue")
  },

  {
    path: "/incidents/report",
    component: DefaultLayout,
    meta: { title: "Report", icon: "", requiresAuth: enable_auth },
    component: () => import(/* webpackChunkName: "incidents-report" */ "@/incident/ReportForm.vue")
  },

  //list
  {
    path: "/dashboard",
    component: DefaultLayout,
    meta: { title: "Dashboard", icon: "view_compact", group: "dashboard", requiresAuth: enable_auth },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "incident-dashboard" */ "@/dashboard/Dashboard.vue")
      }
    ]
  },
  {
    path: "/incidents",
    component: DefaultLayout,
    meta: { title: "Incidents", icon: "view_compact", group: "incidents", requiresAuth: enable_auth },
    children: [
      {
        path: "/incidents",
        name: "IncidentTable",
        component: () => import(/* webpackChunkName: "incident-table" */ "@/incident/Table.vue")
      }
    ]
  },
  {
    path: "/services",
    component: DefaultLayout,
    meta: { title: "Services", icon: "view_compact", group: "contacts", requiresAuth: enable_auth },
    children: [
      {
        path: "/services",
        name: "ServiceTable",
        component: () => import(/* webpackChunkName: "service-table" */ "@/service/Table.vue")
      }
    ]
  },
  {
    path: "/individuals",
    component: DefaultLayout,
    meta: { title: "Individuals", icon: "view_compact", group: "contacts", requiresAuth: enable_auth },
    children: [
      {
        path: "/individuals",
        name: "IndividualTable",
        component: () => import(/* webpackChunkName: "individual-table" */ "@/individual/Table.vue")
      }
    ]
  },
  {
    path: "/teams",
    component: DefaultLayout,
    meta: { title: "Teams", icon: "view_compact", group: "contacts", requiresAuth: enable_auth },
    children: [
      {
        path: "/teams",
        name: "TeamTable",
        component: () => import(/* webpackChunkName: "team-table" */ "@/team/Table.vue")
      }
    ]
  },
  {
    path: "/applications",
    component: DefaultLayout,
    meta: { title: "Applications", icon: "view_compact", group: "contacts", requiresAuth: enable_auth },
    children: [
      {
        path: "/applications",
        name: "ApplicationTable",
        component: () =>
          import(/* webpackChunkName: "application-table" */ "@/application/Table.vue")
      }
    ]
  },
  {
    path: "/search",
    component: DefaultLayout,
    meta: { title: "Search", icon: "view_compact", group: "search", requiresAuth: enable_auth },
    children: [
      {
        path: "/search",
        name: "ResultList",
        component: () =>
          import(/* webpackChunkName: "search-result-list" */ "@/search/ResultList.vue")
      }
    ]
  },
  {
    path: "/documents",
    component: DefaultLayout,
    meta: { title: "Documents", icon: "view_compact", group: "knowledge", requiresAuth: enable_auth },
    children: [
      {
        path: "/Documents",
        name: "DocumentTable",
        component: () => import(/* webpackChunkName: "definition-table" */ "@/document/Table.vue")
      }
    ]
  },
  {
    path: "/definitions",
    component: DefaultLayout,
    meta: { title: "Definitions", icon: "view_compact", group: "knowledge", requiresAuth: enable_auth },
    children: [
      {
        path: "/Definitions",
        name: "DefinitionTable",
        component: () => import(/* webpackChunkName: "definition-table" */ "@/definition/Table.vue")
      }
    ]
  },
  {
    path: "/tasks",
    component: DefaultLayout,
    meta: { title: "Tasks", icon: "view_compact", group: "incident", requiresAuth: enable_auth },
    children: [
      {
        path: "/tasks",
        name: "TaskTable",
        component: () => import(/* webpackChunkName: "knowledge-table" */ "@/task/Table.vue")
      }
    ]
  },

  {
    path: "/terms",
    component: DefaultLayout,
    meta: { title: "Terms", icon: "view_compact", group: "knowledge", requiresAuth: enable_auth },
    children: [
      {
        path: "/terms",
        name: "TermTable",
        component: () => import(/* webpackChunkName: "knowledge-table" */ "@/term/Table.vue")
      }
    ]
  },
  {
    path: "/policies",
    component: DefaultLayout,
    meta: { title: "Policies", icon: "view_compact", group: "routing", requiresAuth: enable_auth },
    children: [
      {
        path: "/policies",
        name: "PoliciesTable",
        component: () => import(/* webpackChunkName: "policy-table" */ "@/policy/Table.vue")
      }
    ]
  },
  {
    path: "/route",
    component: DefaultLayout,
    meta: { title: "Route", icon: "view_compact", group: "routing", requiresAuth: enable_auth },
    children: [
      {
        path: "/route",
        name: "RouteTable",
        component: () => import(/* webpackChunkName: "routing-table" */ "@/route/Table.vue")
      }
    ]
  },
  {
    path: "/incidents/types",
    component: DefaultLayout,
    meta: {
      title: "Incident Types",
      icon: "view_compact",
      group: "configuration",
      requiresAuth: enable_auth
    },
    children: [
      {
        path: "/incidents/types",
        name: "IncidentTypeTable",
        component: () => import(/* webpackChunkName: "routing-table" */ "@/incident_type/Table.vue")
      }
    ]
  }
]
