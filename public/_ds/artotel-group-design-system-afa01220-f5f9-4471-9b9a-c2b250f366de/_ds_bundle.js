/* @ds-bundle: {"format":4,"namespace":"ArtotelGroupDesignSystem_afa012","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"AlertTitle","sourcePath":"components/core/Alert.jsx"},{"name":"AlertDescription","sourcePath":"components/core/Alert.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardContent","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Progress","sourcePath":"components/core/Progress.jsx"},{"name":"Separator","sourcePath":"components/core/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/core/Spinner.jsx"},{"name":"STATUS_TOKENS","sourcePath":"components/core/StatusBadge.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"TableHeader","sourcePath":"components/data/Table.jsx"},{"name":"TableBody","sourcePath":"components/data/Table.jsx"},{"name":"TableFooter","sourcePath":"components/data/Table.jsx"},{"name":"TableRow","sourcePath":"components/data/Table.jsx"},{"name":"TableHead","sourcePath":"components/data/Table.jsx"},{"name":"TableCell","sourcePath":"components/data/Table.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"FieldGroup","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsContent","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DropdownMenu","sourcePath":"components/overlays/DropdownMenu.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"670f6e23cdb3","components/core/Alert.jsx":"a8c1a618636a","components/core/Avatar.jsx":"b8180b0be9e5","components/core/Badge.jsx":"00927feb303e","components/core/Button.jsx":"cbe55e38c177","components/core/Callout.jsx":"2dad348aebac","components/core/Card.jsx":"4b3d2207b302","components/core/Pill.jsx":"dc5643f87d07","components/core/Progress.jsx":"abf3b49c887f","components/core/Separator.jsx":"2233a7af4a86","components/core/Skeleton.jsx":"deed37b53251","components/core/Spinner.jsx":"2abd0f81d34e","components/core/StatusBadge.jsx":"ae6e9cdf9e51","components/data/EmptyState.jsx":"57bb52886f25","components/data/Pagination.jsx":"fe8579b9da0e","components/data/StatCard.jsx":"8390cca407fc","components/data/Table.jsx":"beabec7986a6","components/forms/Checkbox.jsx":"8009e0c5345a","components/forms/Field.jsx":"60f7ed21cfdb","components/forms/Input.jsx":"6c89c3243b5c","components/forms/Label.jsx":"305f987e7475","components/forms/Select.jsx":"9a6e91785b93","components/forms/Switch.jsx":"a896da1344b8","components/forms/Textarea.jsx":"68d9d0c9926a","components/icons/Icon.jsx":"821e2218c5fc","components/navigation/Breadcrumb.jsx":"02b9a7871984","components/navigation/SidebarNav.jsx":"12cf378ce246","components/navigation/Tabs.jsx":"40b2887c0f39","components/overlays/Dialog.jsx":"5d422cc8d3f1","components/overlays/DropdownMenu.jsx":"52e84b66869f","components/overlays/Tooltip.jsx":"c0e791bf09e2","ui_kits/commercial-hub/HubHome.jsx":"de45c7fb6963","ui_kits/commercial-hub/HubProjects.jsx":"cf7ce0fd8b17","ui_kits/commercial-hub/HubShell.jsx":"6f67a228d83b","ui_kits/redist-desk/AccountsScreen.jsx":"d59ed8a64bb4","ui_kits/redist-desk/ContractScreen.jsx":"94134f2fd51f","ui_kits/redist-desk/DashboardScreen.jsx":"e0873d4d3ec3","ui_kits/redist-desk/ImportScreen.jsx":"9600a7576844","ui_kits/redist-desk/Shell.jsx":"5715d3d82117","ui_kits/redist-desk/TasksScreen.jsx":"dc70e9bf263e","ui_kits/team-desk/ContentScreen.jsx":"68b0f1fd6278","ui_kits/team-desk/LoginScreen.jsx":"d26f6533f2cc","ui_kits/team-desk/PeopleScreen.jsx":"14f967a15f05","ui_kits/team-desk/TeamDashboard.jsx":"ac93fddc591b","ui_kits/team-desk/TeamShell.jsx":"75336ccb3461"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArtotelGroupDesignSystem_afa012 = window.ArtotelGroupDesignSystem_afa012 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Artotel Group lockups, built from the real assets in assets/.
 * Guideline rules enforced here: minimum heights (30px logo / 60px with tagline),
 * clear space of 1/2 x (logo) and 1/3 x (logomark), horizontal-first.
 * Colourways: primary (red mark + dark wordmark), white, mono.
 */
const ASSET_MARK = 'assets/logomark.png';
function Logo({
  variant = 'primary',
  configuration = 'horizontal',
  tagline = false,
  height = 32,
  assetBase = '',
  className = '',
  ...rest
}) {
  const mark = (assetBase ? assetBase.replace(/\/$/, '') + '/' : '') + ASSET_MARK;
  const stacked = configuration === 'vertical';
  const markSize = stacked ? height * 1.6 : height;
  const wordColor = variant === 'white' ? 'var(--ag-white)' : variant === 'mono' ? 'currentColor' : 'var(--ag-blue)';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ag-logo', stacked ? 'ag-logo--stacked' : '', className].filter(Boolean).join(' '),
    style: {
      height: stacked ? 'auto' : height,
      gap: markSize / 7
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    className: "ag-logo__mark",
    src: mark,
    alt: "Artotel Group",
    style: {
      width: markSize,
      height: markSize,
      filter: variant === 'white' ? 'brightness(0) invert(1)' : variant === 'mono' ? 'grayscale(1) brightness(0.2)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: markSize / 7,
      alignItems: stacked ? 'flex-start' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ag-logo__wordmark",
    style: {
      fontSize: markSize / 2.6,
      color: wordColor
    }
  }, "Artotel Group"), tagline ? /*#__PURE__*/React.createElement("span", {
    className: "ag-logo__tagline",
    style: {
      fontSize: markSize / 4,
      color: wordColor
    }
  }, "Anytime, Anywhere.") : null));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline message block. shadcn alert values. */
function Alert({
  variant = 'default',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: ['ag-alert', variant !== 'default' ? 'ag-alert--' + variant : '', className].filter(Boolean).join(' ')
  }, rest), children);
}
function AlertTitle({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h5", _extends({
    className: ['ag-alert__title', className].filter(Boolean).join(' ')
  }, rest), children);
}
function AlertDescription({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-alert__description', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Alert, AlertTitle, AlertDescription });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  alt = '',
  name,
  size = 40,
  className = '',
  style,
  ...rest
}) {
  const initials = (name || alt || '?').trim().split(/\s+/).slice(0, 2).map(w => w.charAt(0).toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ag-avatar', className].filter(Boolean).join(' '),
    style: {
      width: size,
      height: size,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", {
    className: "ag-avatar__fallback"
  }, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small inline label. Mirrors ag-redist badgeVariants. */
function Badge({
  variant = 'default',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ag-badge', 'ag-badge--' + variant, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Artotel Group desk button. Mirrors ag-redist buttonVariants (cva) exactly. */
function Button({
  variant = 'default',
  size = 'default',
  as = 'button',
  icon,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const Comp = as;
  const cls = ['ag-btn', 'ag-btn--' + variant, 'ag-btn--size-' + size, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: cls
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Advisory block with an optional leading glyph. */
function Callout({
  variant = 'default',
  icon,
  title,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-callout', variant !== 'default' ? 'ag-callout--' + variant : '', className].filter(Boolean).join(' ')
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "ag-callout__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("h5", {
    className: "ag-callout__title"
  }, title) : null, /*#__PURE__*/React.createElement("p", {
    className: "ag-callout__text"
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. shadcn Card: rounded-xl, 1px border, shadow, p-6 sections. */
function Card({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-card', className].filter(Boolean).join(' ')
  }, rest), children);
}
function CardHeader({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-card__header', className].filter(Boolean).join(' ')
  }, rest), children);
}
function CardTitle({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-card__title', className].filter(Boolean).join(' ')
  }, rest), children);
}
function CardDescription({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-card__description', className].filter(Boolean).join(' ')
  }, rest), children);
}
function CardContent({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-card__content', className].filter(Boolean).join(' ')
  }, rest), children);
}
function CardFooter({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-card__footer', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ARTOTEL Commercial Hub status pill (a dotted, fully-rounded chip).
 * Use inside `.theme-hub`; elsewhere prefer StatusBadge.
 */
const TONES = {
  green: ['var(--hub-green, #16895a)', 'var(--hub-green-bg, #e7f6ef)'],
  amber: ['var(--hub-amber, #b3791a)', 'var(--hub-amber-bg, #fcf2dd)'],
  blue: ['var(--hub-blue, #2563eb)', 'var(--hub-blue-bg, #e7eefe)'],
  slate: ['var(--hub-slate, #5b6471)', 'var(--hub-slate-bg, #eef0f3)'],
  red: ['var(--hub-red, #c8102e)', 'var(--hub-red-bg, #fdeef0)'],
  purple: ['var(--hub-purple, #7c3aed)', 'var(--hub-purple-bg, #f0e9fe)']
};
function Pill({
  tone = 'slate',
  dot = true,
  className = '',
  children,
  ...rest
}) {
  const pair = TONES[tone] || TONES.slate;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ag-pill', dot ? '' : 'ag-pill--no-dot', className].filter(Boolean).join(' '),
    style: {
      color: pair[0],
      background: pair[1]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Progress({
  value = 0,
  className = '',
  ...rest
}) {
  const v = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-valuenow": v,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    className: ['ag-progress', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ag-progress__indicator",
    style: {
      transform: 'translateX(-' + (100 - v) + '%)'
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Progress.jsx", error: String((e && e.message) || e) }); }

// components/core/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Separator({
  orientation = 'horizontal',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-orientation": orientation,
    className: ['ag-separator', 'ag-separator--' + orientation, className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Separator.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Skeleton({
  width,
  height = '1rem',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-skeleton', className].filter(Boolean).join(' '),
    style: {
      width: width,
      height: height,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/core/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Spinner({
  size = 16,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": "Loading",
    className: ['ag-spinner', className].filter(Boolean).join(' '),
    style: {
      width: size,
      height: size,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
/**
 * Token-driven lifecycle badge. Colours come from
 * ag-redist/packages/ui/src/lib/status-colors.ts — one place, every domain.
 */
const STATUS_TOKENS = {
  priority: {
    urgent: {
      variant: 'destructive'
    },
    high: {
      variant: 'outline',
      color: 'var(--status-orange)'
    },
    medium: {
      variant: 'secondary'
    },
    low: {
      variant: 'outline',
      color: 'var(--muted-foreground)'
    }
  },
  role: {
    admin: {
      variant: 'default',
      bg: 'var(--status-rose)'
    },
    headquarter: {
      variant: 'default',
      bg: 'var(--status-violet)'
    },
    property: {
      variant: 'secondary'
    }
  },
  activeFlag: {
    active: {
      variant: 'default'
    },
    inactive: {
      variant: 'outline',
      color: 'var(--muted-foreground)'
    }
  },
  eventStatus: {
    active: {
      variant: 'default'
    },
    proposed: {
      variant: 'outline',
      color: 'var(--status-amber)'
    },
    rejected: {
      variant: 'destructive'
    },
    merged: {
      variant: 'secondary'
    }
  },
  funnelStage: {
    prospect: {
      variant: 'outline',
      color: 'var(--status-slate)'
    },
    qualified: {
      variant: 'outline',
      color: 'var(--status-sky)'
    },
    tentative: {
      variant: 'outline',
      color: 'var(--status-amber)'
    },
    definite: {
      variant: 'default',
      bg: 'var(--status-emerald)'
    },
    lost: {
      variant: 'destructive'
    }
  },
  contractStatus: {
    draft: {
      variant: 'outline',
      color: 'var(--muted-foreground)'
    },
    pending_signature: {
      variant: 'outline',
      color: 'var(--status-amber)'
    },
    active: {
      variant: 'default',
      bg: 'var(--status-emerald)'
    },
    expired: {
      variant: 'outline',
      color: 'var(--status-orange)'
    },
    terminated: {
      variant: 'destructive'
    }
  },
  project_stage: {
    draft: {
      variant: 'outline',
      color: 'var(--muted-foreground)'
    },
    active: {
      variant: 'default'
    },
    closed: {
      variant: 'secondary'
    }
  },
  news_status: {
    draft: {
      variant: 'outline',
      color: 'var(--muted-foreground)'
    },
    scheduled: {
      variant: 'outline',
      color: 'var(--status-amber)'
    },
    published: {
      variant: 'default',
      bg: 'var(--status-emerald)'
    },
    archived: {
      variant: 'secondary'
    }
  },
  kb_status: {
    draft: {
      variant: 'outline',
      color: 'var(--muted-foreground)'
    },
    published: {
      variant: 'default'
    },
    archived: {
      variant: 'secondary'
    }
  },
  bulkFileStatus: {
    detected: {
      variant: 'secondary'
    },
    running: {
      variant: 'outline',
      color: 'var(--status-sky)'
    },
    held: {
      variant: 'outline',
      color: 'var(--status-amber)'
    },
    needs_mapping: {
      variant: 'outline',
      color: 'var(--status-amber)'
    },
    done: {
      variant: 'default',
      bg: 'var(--status-emerald)'
    },
    failed: {
      variant: 'destructive'
    },
    blocked: {
      variant: 'destructive'
    },
    unsupported: {
      variant: 'outline',
      color: 'var(--muted-foreground)'
    }
  },
  auditOperation: {
    INSERT: {
      variant: 'default',
      bg: 'var(--status-emerald)'
    },
    UPDATE: {
      variant: 'default',
      bg: 'var(--status-sky)'
    },
    DELETE: {
      variant: 'destructive'
    }
  }
};
function titleize(value) {
  return String(value).split(/[_\s]+/).map(w => w ? w.charAt(0).toUpperCase() + w.slice(1) : w).join(' ');
}
function StatusBadge({
  kind,
  value,
  label,
  className = ''
}) {
  const map = STATUS_TOKENS[kind] || {};
  const token = map[value] || Object.values(map)[0] || {
    variant: 'secondary'
  };
  const style = {};
  if (token.bg) {
    style.background = token.bg;
    style.color = '#fff';
    style.borderColor = 'transparent';
  } else if (token.color) {
    style.color = token.color;
    style.borderColor = token.color;
  }
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: token.variant,
    className: className,
    style: style
  }, label != null ? label : titleize(value));
}
Object.assign(__ds_scope, { STATUS_TOKENS, StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** shadcn table geometry: 2.5rem head row, 0.5rem cell padding, 0.875rem text. */
function Table({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ag-table-wrap"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: ['ag-table', className].filter(Boolean).join(' ')
  }, rest), children));
}
function TableHeader({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("thead", rest, children);
}
function TableBody({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("tbody", rest, children);
}
function TableFooter({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("tfoot", rest, children);
}
function TableRow({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("tr", rest, children);
}
function TableHead({
  numeric,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("th", _extends({
    className: [numeric ? 'ag-table__num' : '', className].filter(Boolean).join(' ')
  }, rest), children);
}
function TableCell({
  numeric,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("td", _extends({
    className: [numeric ? 'ag-table__num' : '', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  onChange,
  disabled,
  id,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    id: id,
    "aria-checked": !!checked,
    disabled: disabled,
    "data-state": checked ? 'checked' : 'unchecked',
    onClick: () => onChange && onChange(!checked),
    className: ['ag-checkbox', className].filter(Boolean).join(' ')
  }, rest), checked ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ['ag-input', invalid ? 'ag-input--invalid' : '', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Label({
  htmlFor,
  disabled,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    className: ['ag-label', disabled ? 'ag-label--disabled' : '', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + control + hint/error stack. Mirrors ag-redist Field/FieldGroup. */
function Field({
  label,
  htmlFor,
  hint,
  error,
  action,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-field', className].filter(Boolean).join(' ')
  }, rest), label ? action ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    htmlFor: htmlFor
  }, label), action) : /*#__PURE__*/React.createElement(__ds_scope.Label, {
    htmlFor: htmlFor
  }, label) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "ag-error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ag-hint"
  }, hint) : null);
}
function FieldGroup({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ag-field-group', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Field, FieldGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: ['ag-select', className].filter(Boolean).join(' ')
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  }), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  onChange,
  disabled,
  id,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    id: id,
    "aria-checked": !!checked,
    disabled: disabled,
    "data-state": checked ? 'checked' : 'unchecked',
    onClick: () => onChange && onChange(!checked),
    className: ['ag-switch', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ag-switch__thumb"
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  className = '',
  rows = 3,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    className: ['ag-textarea', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
/**
 * Lucide glyph wrapper. The desks import every icon from a single choke point
 * (ag-redist/packages/ui/src/icons.ts); this is that choke point for the design
 * system. Requires the lucide UMD build on the page:
 *   <script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.js"></script>
 * Names are kebab-case ("trending-up") or the lucide PascalCase export ("TrendingUp").
 */
function toPascal(name) {
  return String(name).split(/[-_\s]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}
function Icon({
  name,
  size = 16,
  strokeWidth = 2,
  className = '',
  style,
  ...rest
}) {
  const lib = typeof window !== 'undefined' ? window.lucide : null;
  const node = lib && lib.icons ? lib.icons[toPascal(name)] || lib.icons[name] : null;
  const base = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: ['ag-icon', className].filter(Boolean).join(' '),
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    },
    'aria-hidden': 'true',
    ...rest
  };
  if (!node) return React.createElement('svg', base);
  const children = (Array.isArray(node) ? node[2] : node.children) || [];
  return React.createElement('svg', base, children.map((child, i) => React.createElement(child[0], {
    key: i,
    ...child[1]
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['ag-empty', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ag-empty__icon"
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32
  }) : icon), title ? /*#__PURE__*/React.createElement("p", {
    className: "ag-empty__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "ag-empty__description"
  }, description) : null, action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  pageCount = 1,
  total,
  pageSize,
  onPageChange,
  className = ''
}) {
  const from = total != null && pageSize ? (page - 1) * pageSize + 1 : null;
  const to = total != null && pageSize ? Math.min(page * pageSize, total) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ag-pagination', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", null, from != null ? from + '–' + to + ' of ' + total : 'Page ' + page + ' of ' + pageCount), /*#__PURE__*/React.createElement("div", {
    className: "ag-pagination__pages"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    disabled: page <= 1,
    onClick: () => onPageChange && onPageChange(page - 1),
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-left",
      size: 14
    })
  }, "Previous"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    disabled: page >= pageCount,
    onClick: () => onPageChange && onPageChange(page + 1),
    iconRight: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14
    })
  }, "Next")));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
/** KPI tile. Mirrors ag-redist HighlightCards: label, 2.25rem value, trend row. */
function StatCard({
  label,
  value,
  trend,
  comparison,
  comparisonLabel = 'vs comparison',
  className = ''
}) {
  const glyph = trend === 'up' ? 'trending-up' : trend === 'down' ? 'trending-down' : 'minus';
  const tone = trend === 'up' ? 'ag-stat__comparison--up' : trend === 'down' ? 'ag-stat__comparison--down' : '';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    className: className
  }, /*#__PURE__*/React.createElement(__ds_scope.CardHeader, {
    style: {
      paddingBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CardTitle, null, /*#__PURE__*/React.createElement("span", {
    className: "ag-stat__label"
  }, label))), /*#__PURE__*/React.createElement(__ds_scope.CardContent, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ag-stat__value"
  }, value), comparison ? /*#__PURE__*/React.createElement("div", {
    className: ['ag-stat__comparison', tone].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, (trend === 'up' ? '+' : '') + comparison + ' ' + comparisonLabel)) : null)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Header breadcrumb. The last item is the current page and is not a link. */
function Breadcrumb({
  items = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: ['ag-breadcrumb', className].filter(Boolean).join(' ')
  }, items.map((item, i) => {
    const label = typeof item === 'string' ? item : item.label;
    const href = typeof item === 'string' ? null : item.href;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label + i
    }, i > 0 ? /*#__PURE__*/React.createElement("span", {
      className: "ag-breadcrumb__separator"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14
    })) : null, last || !href ? /*#__PURE__*/React.createElement("span", {
      className: last ? 'ag-breadcrumb__page' : ''
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: href
    }, label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
/**
 * Collapsible sidebar navigation. Mirrors app-sidebar-v3/nav-main.tsx: top-level
 * items carry a lucide glyph; groups expand into an indented, rule-marked list.
 */
function SidebarNav({
  items = [],
  activeHref,
  className = ''
}) {
  const initial = {};
  items.forEach(it => {
    if (it.children && it.children.some(c => c.href === activeHref)) initial[it.name] = true;
  });
  const [open, setOpen] = React.useState(initial);
  return /*#__PURE__*/React.createElement("nav", {
    className: ['ag-sidebar__content', className].filter(Boolean).join(' ')
  }, items.map(item => {
    if (!item.children) {
      return /*#__PURE__*/React.createElement("a", {
        key: item.name,
        href: item.href || '#',
        className: "ag-navitem",
        "data-active": item.href === activeHref
      }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: item.icon
      }) : null, /*#__PURE__*/React.createElement("span", null, item.name), item.badge ? /*#__PURE__*/React.createElement("span", {
        className: "ag-navitem__badge"
      }, item.badge) : null);
    }
    const isOpen = !!open[item.name];
    return /*#__PURE__*/React.createElement("div", {
      key: item.name
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "ag-navitem",
      "data-open": isOpen,
      onClick: () => setOpen({
        ...open,
        [item.name]: !isOpen
      })
    }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon
    }) : null, /*#__PURE__*/React.createElement("span", null, item.name), /*#__PURE__*/React.createElement("span", {
      className: "ag-navitem__chevron"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14
    }))), isOpen ? /*#__PURE__*/React.createElement("div", {
      className: "ag-navsub"
    }, item.children.map(child => /*#__PURE__*/React.createElement("a", {
      key: child.name,
      href: child.href || '#',
      className: "ag-navitem",
      "data-active": child.href === activeHref
    }, /*#__PURE__*/React.createElement("span", null, child.name), child.badge ? /*#__PURE__*/React.createElement("span", {
      className: "ag-navitem__badge"
    }, child.badge) : null))) : null);
  }));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Segmented tabs: 2.25rem pill list on the muted token, active tab lifts to background. */
function Tabs({
  tabs = [],
  value,
  onChange,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['ag-tabs__list', className].filter(Boolean).join(' '),
    role: "tablist"
  }, tabs.map(t => {
    const id = typeof t === 'string' ? t : t.value;
    const label = typeof t === 'string' ? t : t.label;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      role: "tab",
      "aria-selected": value === id,
      "data-state": value === id ? 'active' : 'inactive',
      onClick: () => onChange && onChange(id),
      className: "ag-tabs__trigger"
    }, label);
  }));
}
function TabsContent({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tabpanel",
    className: ['ag-tabs__content', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Tabs, TabsContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
/** Modal. Overlay at 80% black; panel pops 8px with a 0.14s ease. */
function Dialog({
  open,
  onClose,
  title,
  description,
  footer,
  width,
  className = '',
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ag-dialog__overlay",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    className: ['ag-dialog', className].filter(Boolean).join(' '),
    style: width ? {
      maxWidth: width
    } : undefined
  }, onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ag-dialog__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x"
  })) : null, title || description ? /*#__PURE__*/React.createElement("div", {
    className: "ag-dialog__header"
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "ag-dialog__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "ag-dialog__description"
  }, description) : null) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    className: "ag-dialog__footer"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/DropdownMenu.jsx
try { (() => {
/** Row-action / profile menu. Render inside a relatively-positioned wrapper. */
function DropdownMenu({
  items = [],
  onSelect,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "menu",
    className: ['ag-menu', className].filter(Boolean).join(' ')
  }, items.map((item, i) => {
    if (item.type === 'separator') return /*#__PURE__*/React.createElement("div", {
      key: 'sep' + i,
      className: "ag-menu__separator"
    });
    if (item.type === 'label') return /*#__PURE__*/React.createElement("div", {
      key: 'lab' + i,
      className: "ag-menu__label"
    }, item.label);
    return /*#__PURE__*/React.createElement("button", {
      key: item.label + i,
      type: "button",
      role: "menuitem",
      className: ['ag-menu__item', item.destructive ? 'ag-menu__item--destructive' : ''].filter(Boolean).join(' '),
      onClick: () => onSelect && onSelect(item)
    }, item.icon, /*#__PURE__*/React.createElement("span", null, item.label));
  }));
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  className = ''
}) {
  const [shown, setShown] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: ['ag-tooltip', className].filter(Boolean).join(' '),
    onMouseEnter: () => setShown(true),
    onMouseLeave: () => setShown(false),
    onFocus: () => setShown(true),
    onBlur: () => setShown(false)
  }, children, shown ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: "ag-tooltip__content"
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commercial-hub/HubHome.jsx
try { (() => {
const HB2 = window.ArtotelGroupDesignSystem_afa012;
const {
  Pill,
  Button,
  Icon,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Separator
} = HB2;
const HUB_KPIS = [{
  glyph: '🔥',
  label: 'Active pursuits',
  value: '38',
  note: '12 closing this month'
}, {
  glyph: '✅',
  label: 'Signed YTD',
  value: '96',
  note: '78.4% of target'
}, {
  glyph: '⏰',
  label: 'Awaiting reply',
  value: '14',
  note: 'over 5 working days'
}, {
  glyph: '🙋',
  label: 'Requests open',
  value: '7',
  note: 'from 5 properties'
}];
function HubHome({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hub-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-hero__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-eyebrow"
  }, "Strategic Hub"), /*#__PURE__*/React.createElement("h1", null, "Commercial performance, in one place."), /*#__PURE__*/React.createElement("p", null, "Pursuits, contracts and property requests for all 14 properties \u2014 updated every morning at 07:00 WIB."), /*#__PURE__*/React.createElement("div", {
    className: "hub-hero__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "hub-cta",
    type: "button",
    onClick: () => onNavigate('/projects')
  }, "Open projects"), /*#__PURE__*/React.createElement("a", {
    className: "hub-hero__link",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('/requests');
    }
  }, "See open requests \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "hub-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-kpis"
  }, HUB_KPIS.map(k => /*#__PURE__*/React.createElement("div", {
    className: "hub-kpi",
    key: k.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-kpi__glyph"
  }, k.glyph), /*#__PURE__*/React.createElement("span", {
    className: "hub-kpi__label"
  }, k.label), /*#__PURE__*/React.createElement("span", {
    className: "hub-kpi__value"
  }, k.value), /*#__PURE__*/React.createElement("span", {
    className: "hub-kpi__note"
  }, k.note)))), /*#__PURE__*/React.createElement("section", {
    className: "hub-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-section__head"
  }, /*#__PURE__*/React.createElement("h2", null, "\uD83D\uDCC1 Pursuits this quarter"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('/projects');
    }
  }, "All projects")), /*#__PURE__*/React.createElement("div", {
    className: "hub-panel"
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Pursuit"), /*#__PURE__*/React.createElement(TableHead, null, "Property"), /*#__PURE__*/React.createElement(TableHead, null, "Owner"), /*#__PURE__*/React.createElement(TableHead, {
    numeric: true
  }, "Value (IDR)"), /*#__PURE__*/React.createElement(TableHead, null, "Stage"))), /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Garuda corporate renewal"), /*#__PURE__*/React.createElement(TableCell, null, "Group"), /*#__PURE__*/React.createElement(TableCell, null, "Reza Baita"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "5.20 B"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Pill, {
    tone: "green"
  }, "On track"))), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Kemenparekraf MICE tender"), /*#__PURE__*/React.createElement(TableCell, null, "ARTOTEL Thamrin"), /*#__PURE__*/React.createElement(TableCell, null, "Dewi Anggraini"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "1.84 B"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Pill, {
    tone: "amber"
  }, "At risk"))), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Traveloka OTA re-rate"), /*#__PURE__*/React.createElement(TableCell, null, "Group"), /*#__PURE__*/React.createElement(TableCell, null, "Reza Baita"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "1.32 B"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Pill, {
    tone: "blue"
  }, "In review"))), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Bank Mandiri annual offsite"), /*#__PURE__*/React.createElement(TableCell, null, "ARTOTEL Sanur"), /*#__PURE__*/React.createElement(TableCell, null, "Yudha Prasetya"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "0.86 B"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Pill, {
    tone: "slate",
    dot: false
  }, "Backlog"))), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Pertamina crew contract"), /*#__PURE__*/React.createElement(TableCell, null, "ARTOTEL Suites Mangkuluhur"), /*#__PURE__*/React.createElement(TableCell, null, "Dewi Anggraini"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "2.41 B"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Pill, {
    tone: "red"
  }, "Blocked"))))))), /*#__PURE__*/React.createElement("div", {
    className: "hub-cols"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hub-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-section__head"
  }, /*#__PURE__*/React.createElement("h2", null, "\uD83D\uDE4B Property requests"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('/requests');
    }
  }, "All requests")), /*#__PURE__*/React.createElement("div", {
    className: "hub-panel hub-panel--list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-listrow"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "purple"
  }, "New"), /*#__PURE__*/React.createElement("span", null, "Rate override \u2014 ARTOTEL Sanur, 12\u201314 Sep"), /*#__PURE__*/React.createElement("span", {
    className: "hub-muted"
  }, "2h ago")), /*#__PURE__*/React.createElement("div", {
    className: "hub-listrow"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "amber"
  }, "Waiting"), /*#__PURE__*/React.createElement("span", null, "Group quote \u2014 84 rooms, Labuan Bajo"), /*#__PURE__*/React.createElement("span", {
    className: "hub-muted"
  }, "1d ago")), /*#__PURE__*/React.createElement("div", {
    className: "hub-listrow"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "green"
  }, "Answered"), /*#__PURE__*/React.createElement("span", null, "Commission query \u2014 Traveloka"), /*#__PURE__*/React.createElement("span", {
    className: "hub-muted"
  }, "3d ago")))), /*#__PURE__*/React.createElement("section", {
    className: "hub-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-section__head"
  }, /*#__PURE__*/React.createElement("h2", null, "\uD83D\uDCDD Notes from the desk")), /*#__PURE__*/React.createElement("div", {
    className: "hub-panel hub-panel--prose"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Rate calendar for September is published."), " Behavioural adjustments apply from the 8th; properties do not need to re-load anything."), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Two contracts expire on 31 August."), " Traveloka 2025 and Bank Mandiri MICE. Extensions need signature before close of business Friday."))))));
}
Object.assign(window, {
  HubHome,
  HUB_KPIS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commercial-hub/HubHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commercial-hub/HubProjects.jsx
try { (() => {
const HB3 = window.ArtotelGroupDesignSystem_afa012;
const {
  Pill,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  Input,
  Select,
  Separator
} = HB3;
const PURSUITS = [{
  name: 'Garuda corporate renewal',
  property: 'Group',
  owner: 'Reza Baita',
  value: '5.20 B',
  close: '30 Sep 2026',
  tone: 'green',
  stage: 'On track'
}, {
  name: 'Pertamina crew contract',
  property: 'ARTOTEL Suites Mangkuluhur',
  owner: 'Dewi Anggraini',
  value: '2.41 B',
  close: '15 Sep 2026',
  tone: 'red',
  stage: 'Blocked'
}, {
  name: 'Kemenparekraf MICE tender',
  property: 'ARTOTEL Thamrin',
  owner: 'Dewi Anggraini',
  value: '1.84 B',
  close: '22 Sep 2026',
  tone: 'amber',
  stage: 'At risk'
}, {
  name: 'Traveloka OTA re-rate',
  property: 'Group',
  owner: 'Reza Baita',
  value: '1.32 B',
  close: '05 Oct 2026',
  tone: 'blue',
  stage: 'In review'
}, {
  name: 'Bank Mandiri annual offsite',
  property: 'ARTOTEL Sanur',
  owner: 'Yudha Prasetya',
  value: '0.86 B',
  close: '—',
  tone: 'slate',
  stage: 'Backlog'
}];
function HubProjects({
  view
}) {
  const title = view === 'requests' ? '🙋 Requests' : view === 'library' ? '📁 Library' : '🔥 Projects';
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "hub-wrap hub-wrap--top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-pagehead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hub-eyebrow hub-eyebrow--ink"
  }, "Strategic Hub"), /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", null, view === 'requests' ? '7 open requests from 5 properties.' : view === 'library' ? 'Rate cards, contract templates and the commercial calendar.' : '38 active pursuits · 14 properties · IDR')), /*#__PURE__*/React.createElement("div", {
    className: "hub-toolbar"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "search",
    placeholder: "Search pursuits\u2026"
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "All stages",
    options: ['On track', 'At risk', 'In review', 'Blocked', 'Backlog']
  }), /*#__PURE__*/React.createElement("button", {
    className: "hub-cta",
    type: "button"
  }, "Export"))), /*#__PURE__*/React.createElement("div", {
    className: "hub-panel"
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Pursuit"), /*#__PURE__*/React.createElement(TableHead, null, "Property"), /*#__PURE__*/React.createElement(TableHead, null, "Owner"), /*#__PURE__*/React.createElement(TableHead, {
    numeric: true
  }, "Value (IDR)"), /*#__PURE__*/React.createElement(TableHead, null, "Expected close"), /*#__PURE__*/React.createElement(TableHead, null, "Stage"))), /*#__PURE__*/React.createElement(TableBody, null, PURSUITS.map(p => /*#__PURE__*/React.createElement(TableRow, {
    key: p.name
  }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "hub-strong"
  }, p.name)), /*#__PURE__*/React.createElement(TableCell, null, p.property), /*#__PURE__*/React.createElement(TableCell, null, p.owner), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, p.value), /*#__PURE__*/React.createElement(TableCell, null, p.close), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Pill, {
    tone: p.tone,
    dot: p.tone !== 'slate'
  }, p.stage))))), /*#__PURE__*/React.createElement(TableFooter, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Total"), /*#__PURE__*/React.createElement(TableCell, null), /*#__PURE__*/React.createElement(TableCell, null), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "11.63 B"), /*#__PURE__*/React.createElement(TableCell, null), /*#__PURE__*/React.createElement(TableCell, null))))), /*#__PURE__*/React.createElement("div", {
    className: "hub-legend"
  }, /*#__PURE__*/React.createElement("span", null, "Stage key"), /*#__PURE__*/React.createElement(Pill, {
    tone: "green"
  }, "On track"), /*#__PURE__*/React.createElement(Pill, {
    tone: "amber"
  }, "At risk"), /*#__PURE__*/React.createElement(Pill, {
    tone: "blue"
  }, "In review"), /*#__PURE__*/React.createElement(Pill, {
    tone: "red"
  }, "Blocked"), /*#__PURE__*/React.createElement(Pill, {
    tone: "purple"
  }, "New"), /*#__PURE__*/React.createElement(Pill, {
    tone: "slate",
    dot: false
  }, "Backlog"))));
}
Object.assign(window, {
  HubProjects,
  PURSUITS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commercial-hub/HubProjects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commercial-hub/HubShell.jsx
try { (() => {
const HB = window.ArtotelGroupDesignSystem_afa012;
const {
  Button,
  Icon
} = HB;
const HUB_NAV = [{
  label: 'Overview',
  href: '/overview'
}, {
  label: 'Projects',
  href: '/projects'
}, {
  label: 'Requests',
  href: '/requests'
}, {
  label: 'Library',
  href: '/library'
}];
function HubShell({
  route,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hub theme-hub"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hub-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-topbar__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hub-wordmark",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('/overview');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-light.svg",
    alt: "ARTOTEL"
  }), /*#__PURE__*/React.createElement("span", null, "Commercial")), /*#__PURE__*/React.createElement("nav", {
    className: "hub-nav"
  }, HUB_NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.href,
    href: n.href,
    "data-active": route === n.href,
    onClick: e => {
      e.preventDefault();
      onNavigate(n.href);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "hub-topbar__right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hub-topbar__link",
    href: "#",
    onClick: e => e.preventDefault()
  }, "\uD83D\uDDA8 Print pack"), /*#__PURE__*/React.createElement("button", {
    className: "hub-cta",
    type: "button"
  }, "New request")))), children, /*#__PURE__*/React.createElement("footer", {
    className: "hub-footer"
  }, /*#__PURE__*/React.createElement("span", null, "ARTOTEL Commercial \xB7 Strategic Hub"), /*#__PURE__*/React.createElement("span", null, "Internal use only \xB7 \xA9 2026 Artotel Group")));
}
Object.assign(window, {
  HubShell,
  HUB_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commercial-hub/HubShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/redist-desk/AccountsScreen.jsx
try { (() => {
const RD3 = window.ArtotelGroupDesignSystem_afa012;
const {
  Card,
  CardContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  StatusBadge,
  Pagination,
  Button,
  Icon,
  Input,
  Select,
  Avatar,
  Badge
} = RD3;
const ACCOUNTS = [{
  name: 'Garuda Indonesia',
  type: 'Corporate',
  owner: 'Reza Baita',
  nights: '4,182',
  flag: 'active',
  stage: 'definite'
}, {
  name: 'Pertamina Hulu Energi',
  type: 'Corporate',
  owner: 'Dewi Anggraini',
  nights: '2,610',
  flag: 'active',
  stage: 'definite'
}, {
  name: 'Traveloka',
  type: 'OTA',
  owner: 'Reza Baita',
  nights: '1,905',
  flag: 'active',
  stage: 'tentative'
}, {
  name: 'Kemenparekraf',
  type: 'Government',
  owner: 'Yudha Prasetya',
  nights: '1,144',
  flag: 'active',
  stage: 'qualified'
}, {
  name: 'Bank Mandiri MICE',
  type: 'MICE',
  owner: 'Dewi Anggraini',
  nights: '812',
  flag: 'inactive',
  stage: 'prospect'
}];
function AccountsScreen({
  onOpenContract
}) {
  const [page, setPage] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    className: "rd-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rd-filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rd-search rd-search--wide"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  }), /*#__PURE__*/React.createElement(Input, {
    type: "search",
    placeholder: "Search accounts\u2026"
  })), /*#__PURE__*/React.createElement(Select, {
    placeholder: "All brands",
    options: ['ARTOTEL', 'Kyriad', 'Dafam']
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "All segments",
    options: ['Corporate', 'OTA', 'Government', 'MICE']
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "filter"
    })
  }, "More filters")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Account"), /*#__PURE__*/React.createElement(TableHead, null, "Type"), /*#__PURE__*/React.createElement(TableHead, null, "Owner"), /*#__PURE__*/React.createElement(TableHead, {
    numeric: true
  }, "Room nights"), /*#__PURE__*/React.createElement(TableHead, null, "Funnel"), /*#__PURE__*/React.createElement(TableHead, null, "Active"), /*#__PURE__*/React.createElement(TableHead, null))), /*#__PURE__*/React.createElement(TableBody, null, ACCOUNTS.map(a => /*#__PURE__*/React.createElement(TableRow, {
    key: a.name
  }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "rd-link",
    onClick: e => {
      e.preventDefault();
      onOpenContract(a.name);
    }
  }, a.name)), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Badge, {
    variant: "secondary"
  }, a.type)), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "rd-owner"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.owner,
    size: 22
  }), a.owner)), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, a.nights), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "funnelStage",
    value: a.stage
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "activeFlag",
    value: a.flag
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "icon",
    "aria-label": "More"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more-horizontal"
  }))))))), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageCount: 13,
    total: 312,
    pageSize: 25,
    onPageChange: setPage
  }))));
}
Object.assign(window, {
  AccountsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/redist-desk/AccountsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/redist-desk/ContractScreen.jsx
try { (() => {
const RD4 = window.ArtotelGroupDesignSystem_afa012;
const {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  StatusBadge,
  Tabs,
  Button,
  Icon,
  Field,
  FieldGroup,
  Input,
  Select,
  Switch,
  Label,
  Dialog,
  Progress,
  Separator
} = RD4;
function ContractScreen({
  account
}) {
  const [tab, setTab] = React.useState('rates');
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "rd-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rd-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rd-meta__label"
  }, "Status"), /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "contractStatus",
    value: "pending_signature"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rd-meta__label"
  }, "Validity"), /*#__PURE__*/React.createElement("span", {
    className: "rd-strong"
  }, "01 Jan 2026 \u2013 31 Dec 2026")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rd-meta__label"
  }, "Owner"), /*#__PURE__*/React.createElement("span", {
    className: "rd-strong"
  }, "Reza Baita")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rd-meta__label"
  }, "Properties"), /*#__PURE__*/React.createElement("span", {
    className: "rd-strong"
  }, "14"))), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'rates',
      label: 'Rate Structure'
    }, {
      value: 'terms',
      label: 'Terms'
    }, {
      value: 'production',
      label: 'Production'
    }, {
      value: 'audit',
      label: 'Audit'
    }]
  }), tab === 'rates' ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    className: "rd-cardhead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, null, "Negotiated rates"), /*#__PURE__*/React.createElement(CardDescription, null, account, " \xB7 2026 \xB7 IDR, room only")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus"
    })
  }, "Add room type")), /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Room type"), /*#__PURE__*/React.createElement(TableHead, null, "Rate plan"), /*#__PURE__*/React.createElement(TableHead, {
    numeric: true
  }, "Weekday"), /*#__PURE__*/React.createElement(TableHead, {
    numeric: true
  }, "Weekend"), /*#__PURE__*/React.createElement(TableHead, {
    numeric: true
  }, "Allotment"))), /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Studio"), /*#__PURE__*/React.createElement(TableCell, null, "COR26-RO"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "842,000"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "968,000"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "12")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "One Bedroom"), /*#__PURE__*/React.createElement(TableCell, null, "COR26-RO"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "1,120,000"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "1,280,000"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "8")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Two Bedroom"), /*#__PURE__*/React.createElement(TableCell, null, "COR26-BB"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "1,640,000"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "1,880,000"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "4")))))) : tab === 'terms' ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Contract terms"), /*#__PURE__*/React.createElement(CardDescription, null, "Applies to all 14 properties")), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, {
    label: "Contract name",
    htmlFor: "cn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cn",
    defaultValue: account + ' 2026'
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Segment",
    htmlFor: "sg"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "sg",
    placeholder: "Corporate",
    options: ['Corporate', 'OTA', 'Government', 'MICE']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Payment terms",
    htmlFor: "pt"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "pt",
    placeholder: "30 days",
    options: ['14 days', '30 days', '45 days']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Cancellation",
    htmlFor: "cx"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cx",
    defaultValue: "24 hours before arrival"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rd-switchrow"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: true
  }), /*#__PURE__*/React.createElement(Label, null, "Auto-extend at expiry"))), /*#__PURE__*/React.createElement(CardFooter, null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setOpen(true)
  }, "Issue Contract"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Extend"))) : tab === 'production' ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Production against contract"), /*#__PURE__*/React.createElement(CardDescription, null, "Room nights consumed vs committed")), /*#__PURE__*/React.createElement(CardContent, {
    className: "rd-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rd-progressrow"
  }, /*#__PURE__*/React.createElement("span", null, "4,182 of 6,000 room nights"), /*#__PURE__*/React.createElement("span", {
    className: "rd-muted"
  }, "70%")), /*#__PURE__*/React.createElement(Progress, {
    value: 70
  }), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    className: "rd-progressrow"
  }, /*#__PURE__*/React.createElement("span", null, "3.94 B of 5.20 B revenue"), /*#__PURE__*/React.createElement("span", {
    className: "rd-muted"
  }, "76%")), /*#__PURE__*/React.createElement(Progress, {
    value: 76
  }))) : /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Audit trail"), /*#__PURE__*/React.createElement(CardDescription, null, "Every change on this record")), /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "When"), /*#__PURE__*/React.createElement(TableHead, null, "Operation"), /*#__PURE__*/React.createElement(TableHead, null, "Field"), /*#__PURE__*/React.createElement(TableHead, null, "By"))), /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "26 Aug 2026 \xB7 09:14"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "auditOperation",
    value: "UPDATE"
  })), /*#__PURE__*/React.createElement(TableCell, null, "weekday_rate"), /*#__PURE__*/React.createElement(TableCell, null, "Reza Baita")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "24 Aug 2026 \xB7 16:02"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "auditOperation",
    value: "INSERT"
  })), /*#__PURE__*/React.createElement(TableCell, null, "rate_row"), /*#__PURE__*/React.createElement(TableCell, null, "Dewi Anggraini")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "21 Aug 2026 \xB7 11:48"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "auditOperation",
    value: "DELETE"
  })), /*#__PURE__*/React.createElement(TableCell, null, "allotment"), /*#__PURE__*/React.createElement(TableCell, null, "Yudha Prasetya")))))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "Issue Contract",
    description: 'Send ' + account + ' 2026 for signature.',
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setOpen(false)
    }, "Issue Contract"))
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, {
    label: "Signatory email",
    htmlFor: "se"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "se",
    type: "email",
    placeholder: "Enter your email"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Effective date",
    htmlFor: "ed"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ed",
    defaultValue: "01 Jan 2026"
  })))));
}
Object.assign(window, {
  ContractScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/redist-desk/ContractScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/redist-desk/DashboardScreen.jsx
try { (() => {
const RD2 = window.ArtotelGroupDesignSystem_afa012;
const {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  StatCard,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  StatusBadge,
  Tabs,
  Button,
  Icon,
  Callout,
  Separator
} = RD2;
const PRODUCTION = [{
  account: 'Garuda Indonesia',
  segment: 'Corporate',
  nights: '4,182',
  revenue: '3.94 B',
  adr: '942,000',
  stage: 'definite'
}, {
  account: 'Pertamina Hulu Energi',
  segment: 'Corporate',
  nights: '2,610',
  revenue: '2.41 B',
  adr: '923,000',
  stage: 'definite'
}, {
  account: 'Traveloka',
  segment: 'OTA',
  nights: '1,905',
  revenue: '1.32 B',
  adr: '693,000',
  stage: 'tentative'
}, {
  account: 'Kemenparekraf',
  segment: 'Government',
  nights: '1,144',
  revenue: '0.98 B',
  adr: '857,000',
  stage: 'qualified'
}, {
  account: 'Bank Mandiri MICE',
  segment: 'MICE',
  nights: '812',
  revenue: '0.86 B',
  adr: '1,059,000',
  stage: 'prospect'
}];
function DashboardScreen() {
  const [period, setPeriod] = React.useState('mtd');
  return /*#__PURE__*/React.createElement("div", {
    className: "rd-stack"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: period,
    onChange: setPeriod,
    tabs: [{
      value: 'mtd',
      label: 'Month to date'
    }, {
      value: 'month',
      label: 'Month'
    }, {
      value: 'quarter',
      label: 'Quarter'
    }, {
      value: 'year',
      label: 'Year'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "rd-kpis"
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Room revenue",
    value: "14.8 B",
    trend: "up",
    comparison: "6.2%",
    comparisonLabel: "vs prior"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Room nights",
    value: "812,400",
    trend: "up",
    comparison: "2.4%",
    comparisonLabel: "vs prior"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Occupancy",
    value: "78.4%",
    trend: "down",
    comparison: "1.1%",
    comparisonLabel: "vs prior"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "ADR",
    value: "918,200",
    trend: "up",
    comparison: "3.7%",
    comparisonLabel: "vs budget"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rd-cols"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    className: "rd-cardhead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, null, "Account Production"), /*#__PURE__*/React.createElement(CardDescription, null, "Month to date \xB7 14 properties")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download"
    })
  }, "Export CSV")), /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Account"), /*#__PURE__*/React.createElement(TableHead, null, "Segment"), /*#__PURE__*/React.createElement(TableHead, {
    numeric: true
  }, "Room nights"), /*#__PURE__*/React.createElement(TableHead, {
    numeric: true
  }, "Revenue (IDR)"), /*#__PURE__*/React.createElement(TableHead, {
    numeric: true
  }, "ADR"), /*#__PURE__*/React.createElement(TableHead, null, "Funnel"))), /*#__PURE__*/React.createElement(TableBody, null, PRODUCTION.map(r => /*#__PURE__*/React.createElement(TableRow, {
    key: r.account
  }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "rd-strong"
  }, r.account)), /*#__PURE__*/React.createElement(TableCell, null, r.segment), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, r.nights), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, r.revenue), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, r.adr), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "funnelStage",
    value: r.stage
  })))))))), /*#__PURE__*/React.createElement("div", {
    className: "rd-stack"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Needs attention"), /*#__PURE__*/React.createElement(CardDescription, null, "Contracts and tasks due this week")), /*#__PURE__*/React.createElement(CardContent, {
    className: "rd-attention"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rd-attention__row"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "contractStatus",
    value: "pending_signature"
  }), /*#__PURE__*/React.createElement("span", null, "Garuda Indonesia 2026"), /*#__PURE__*/React.createElement("span", {
    className: "rd-muted"
  }, "2 days")), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    className: "rd-attention__row"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "contractStatus",
    value: "expired"
  }), /*#__PURE__*/React.createElement("span", null, "Traveloka 2025"), /*#__PURE__*/React.createElement("span", {
    className: "rd-muted"
  }, "Expired")), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    className: "rd-attention__row"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "priority",
    value: "high"
  }), /*#__PURE__*/React.createElement("span", null, "Rate load \u2014 Behavioral Rates"), /*#__PURE__*/React.createElement("span", {
    className: "rd-muted"
  }, "Fri")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Behavioral Rates"), /*#__PURE__*/React.createElement(CardDescription, null, "No statistics loaded yet")), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Callout, {
    variant: "info",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "info"
    }),
    title: "No statistics loaded yet"
  }, "Import a monthly report to populate this view."))))));
}
Object.assign(window, {
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/redist-desk/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/redist-desk/ImportScreen.jsx
try { (() => {
const RD5 = window.ArtotelGroupDesignSystem_afa012;
const {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  StatusBadge,
  EmptyState,
  Button,
  Icon,
  Progress,
  Alert,
  AlertTitle,
  AlertDescription,
  Skeleton
} = RD5;
function ImportScreen({
  loaded,
  onLoad
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rd-stack"
  }, /*#__PURE__*/React.createElement(Alert, null, /*#__PURE__*/React.createElement(AlertTitle, null, "Monthly reports close on the 5th"), /*#__PURE__*/React.createElement(AlertDescription, null, "Files dropped after close are held for mapping before they affect production figures.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    className: "rd-cardhead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, null, "Bulk Upload"), /*#__PURE__*/React.createElement(CardDescription, null, "August 2026 \xB7 14 properties")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "upload"
    }),
    onClick: onLoad
  }, "Bulk Upload")), /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: loaded ? 0 : undefined
    }
  }, loaded ? /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "File"), /*#__PURE__*/React.createElement(TableHead, null, "Property"), /*#__PURE__*/React.createElement(TableHead, {
    numeric: true
  }, "Rows"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, null, "Progress"))), /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "AUG26_MANGKULUHUR.xlsx"), /*#__PURE__*/React.createElement(TableCell, null, "ARTOTEL Suites Mangkuluhur"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "4,182"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "bulkFileStatus",
    value: "done"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Progress, {
    value: 100
  }))), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "AUG26_THAMRIN.xlsx"), /*#__PURE__*/React.createElement(TableCell, null, "ARTOTEL Thamrin"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "2,918"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "bulkFileStatus",
    value: "running"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Progress, {
    value: 64
  }))), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "AUG26_SANUR.csv"), /*#__PURE__*/React.createElement(TableCell, null, "ARTOTEL Sanur"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "1,204"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "bulkFileStatus",
    value: "needs_mapping"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Progress, {
    value: 30
  }))), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "AUG26_LEGACY.xls"), /*#__PURE__*/React.createElement(TableCell, null, "\u2014"), /*#__PURE__*/React.createElement(TableCell, {
    numeric: true
  }, "0"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "bulkFileStatus",
    value: "unsupported"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Progress, {
    value: 0
  }))))) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "file-text",
    title: "No statistics loaded yet",
    description: "Import a monthly report to populate this view.",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onLoad
    }, "Bulk Upload")
  }))), loaded ? null : /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Last run"), /*#__PURE__*/React.createElement(CardDescription, null, "Waiting for a report")), /*#__PURE__*/React.createElement(CardContent, {
    className: "rd-stack"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    style: {
      height: 14,
      width: '60%'
    }
  }), /*#__PURE__*/React.createElement(Skeleton, {
    style: {
      height: 14,
      width: '40%'
    }
  }), /*#__PURE__*/React.createElement(Skeleton, {
    style: {
      height: 14,
      width: '72%'
    }
  }))));
}
Object.assign(window, {
  ImportScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/redist-desk/ImportScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/redist-desk/Shell.jsx
try { (() => {
const RD = window.ArtotelGroupDesignSystem_afa012;
const {
  SidebarNav,
  Avatar,
  Icon,
  Breadcrumb,
  Input
} = RD;
const REDIST_NAV = [{
  name: 'Dashboard',
  href: '/dashboard',
  icon: 'layout-dashboard'
}, {
  name: 'Activities',
  icon: 'activity',
  children: [{
    name: 'Tasks',
    href: '/activities/tasks',
    badge: 7
  }, {
    name: 'Projects',
    href: '/activities/projects'
  }]
}, {
  name: 'Sales',
  icon: 'trending-up',
  children: [{
    name: 'Accounts',
    href: '/sales/account'
  }, {
    name: 'Contacts',
    href: '/sales/contacts'
  }, {
    name: 'Funnels',
    href: '/sales/funnel'
  }, {
    name: 'Contracts',
    href: '/sales/contract'
  }]
}, {
  name: 'Revenue',
  icon: 'badge-percent',
  children: [{
    name: 'Rate Structure',
    href: '/revenue/rate-structure'
  }, {
    name: 'Behavioral Rates',
    href: '/revenue/behavioral-rates'
  }, {
    name: 'Account Production',
    href: '/revenue/account-production'
  }]
}, {
  name: 'Data',
  icon: 'hard-drive',
  children: [{
    name: 'Import',
    href: '/data/import'
  }, {
    name: 'Bulk Upload',
    href: '/data/bulk-upload'
  }]
}];
function DeskShell({
  activeHref,
  onNavigate,
  crumbs,
  title,
  description,
  actions,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rd-shell"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ag-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ag-sidebar__header rd-switcher"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logomark.png",
    alt: "Artotel Group",
    width: "28",
    height: "28"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rd-switcher__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rd-switcher__name"
  }, "ARTOTEL Suites Mangkuluhur"), /*#__PURE__*/React.createElement("span", {
    className: "rd-switcher__meta"
  }, "Redist Desk \xB7 Jakarta")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    className: "rd-navwrap",
    onClick: e => {
      const a = e.target.closest('a[href]');
      if (a) {
        e.preventDefault();
        onNavigate(a.getAttribute('href'));
      }
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    items: REDIST_NAV,
    activeHref: activeHref
  })), /*#__PURE__*/React.createElement("div", {
    className: "ag-sidebar__footer rd-userrow"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Reza Baita",
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    className: "rd-switcher__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rd-switcher__name"
  }, "Reza Baita"), /*#__PURE__*/React.createElement("span", {
    className: "rd-switcher__meta"
  }, "Headquarter")), /*#__PURE__*/React.createElement(Icon, {
    name: "more-horizontal",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rd-main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "rd-topbar"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: crumbs
  }), /*#__PURE__*/React.createElement("div", {
    className: "rd-topbar__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rd-search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  }), /*#__PURE__*/React.createElement(Input, {
    type: "search",
    placeholder: "Search accounts\u2026"
  })), /*#__PURE__*/React.createElement("button", {
    className: "ag-btn ag-btn--ghost ag-btn--size-icon",
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell"
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Reza Baita",
    size: 28
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rd-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rd-pagehead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, title), description ? /*#__PURE__*/React.createElement("p", null, description) : null), /*#__PURE__*/React.createElement("div", {
    className: "rd-pagehead__actions"
  }, actions)), children)));
}
Object.assign(window, {
  DeskShell,
  REDIST_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/redist-desk/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/redist-desk/TasksScreen.jsx
try { (() => {
const RD6 = window.ArtotelGroupDesignSystem_afa012;
const {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  EmptyState,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  StatusBadge,
  Checkbox,
  Button,
  Icon,
  Avatar
} = RD6;
function TasksScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "rd-stack"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    className: "rd-cardhead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, null, "My tasks"), /*#__PURE__*/React.createElement(CardDescription, null, "7 open \xB7 week of 24 August")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus"
    })
  }, "New task")), /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null), /*#__PURE__*/React.createElement(TableHead, null, "Task"), /*#__PURE__*/React.createElement(TableHead, null, "Account"), /*#__PURE__*/React.createElement(TableHead, null, "Priority"), /*#__PURE__*/React.createElement(TableHead, null, "Owner"), /*#__PURE__*/React.createElement(TableHead, null, "Due"))), /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(TableCell, null, "Load 2026 behavioral rates"), /*#__PURE__*/React.createElement(TableCell, null, "Traveloka"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "priority",
    value: "urgent"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "rd-owner"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Reza Baita",
    size: 22
  }), "Reza Baita")), /*#__PURE__*/React.createElement(TableCell, null, "27 Aug")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(TableCell, null, "Chase signature \u2014 Garuda Indonesia 2026"), /*#__PURE__*/React.createElement(TableCell, null, "Garuda Indonesia"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "priority",
    value: "high"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "rd-owner"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dewi Anggraini",
    size: 22
  }), "Dewi Anggraini")), /*#__PURE__*/React.createElement(TableCell, null, "28 Aug")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(TableCell, null, "Map AUG26_SANUR.csv columns"), /*#__PURE__*/React.createElement(TableCell, null, "\u2014"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "priority",
    value: "medium"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "rd-owner"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Yudha Prasetya",
    size: 22
  }), "Yudha Prasetya")), /*#__PURE__*/React.createElement(TableCell, null, "29 Aug")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(TableCell, null, "Review Q4 allotment for MICE accounts"), /*#__PURE__*/React.createElement(TableCell, null, "Bank Mandiri MICE"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "priority",
    value: "low"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "rd-owner"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Reza Baita",
    size: 22
  }), "Reza Baita")), /*#__PURE__*/React.createElement(TableCell, null, "02 Sep")))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Projects"), /*#__PURE__*/React.createElement(CardDescription, null, "Nothing needs your attention this week.")), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "folder",
    title: "No projects yet",
    description: "Nothing needs your attention this week.",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "New project")
  }))));
}
Object.assign(window, {
  TasksScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/redist-desk/TasksScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/team-desk/ContentScreen.jsx
try { (() => {
const TD5 = window.ArtotelGroupDesignSystem_afa012;
const {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  StatusBadge,
  Button,
  Icon,
  Tabs,
  Textarea,
  Field,
  FieldGroup,
  Input,
  EmptyState,
  DropdownMenu,
  Badge
} = TD5;
function ActionsMenu() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "td-menuwrap"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down"
    }),
    onClick: () => setOpen(!open)
  }, "Actions"), open ? /*#__PURE__*/React.createElement(DropdownMenu, {
    items: [{
      label: 'Export list'
    }, {
      label: 'Archive selected'
    }, {
      type: 'separator'
    }, {
      label: 'Manage tags'
    }],
    onSelect: () => setOpen(false)
  }) : null);
}
function ContentScreen({
  kind
}) {
  const [tab, setTab] = React.useState('list');
  const rows = kind === 'news' ? [{
    title: 'Wanderlust tier refresh',
    author: 'Dewi Anggraini',
    status: 'published',
    date: '24 Aug 2026'
  }, {
    title: 'September rate calendar',
    author: 'Reza Baita',
    status: 'scheduled',
    date: '01 Sep 2026'
  }, {
    title: 'New property: ARTOTEL Labuan Bajo',
    author: 'Bagas Nugroho',
    status: 'draft',
    date: '—'
  }, {
    title: 'Q2 guest satisfaction summary',
    author: 'Dewi Anggraini',
    status: 'archived',
    date: '12 Jun 2026'
  }] : [{
    title: 'Front office SOP — check-in',
    author: 'Yudha Prasetya',
    status: 'published',
    date: '18 Aug 2026'
  }, {
    title: 'Rate loading in Redist Desk',
    author: 'Reza Baita',
    status: 'published',
    date: '02 Aug 2026'
  }, {
    title: 'Wanderlust benefits by tier',
    author: 'Sari Wulandari',
    status: 'draft',
    date: '—'
  }, {
    title: 'Legacy PMS export mapping',
    author: 'Bagas Nugroho',
    status: 'archived',
    date: '14 Mar 2026'
  }];
  const statusKind = kind === 'news' ? 'news_status' : 'kb_status';
  return /*#__PURE__*/React.createElement("div", {
    className: "td-stack"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'list',
      label: 'All'
    }, {
      value: 'compose',
      label: 'Compose'
    }]
  }), tab === 'list' ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    className: "td-cardhead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, null, kind === 'news' ? 'News' : 'Knowledge Base'), /*#__PURE__*/React.createElement(CardDescription, null, rows.length, " items \xB7 all properties")), /*#__PURE__*/React.createElement(ActionsMenu, null)), /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Title"), /*#__PURE__*/React.createElement(TableHead, null, "Author"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, null, "Date"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map(r => /*#__PURE__*/React.createElement(TableRow, {
    key: r.title
  }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "td-person__name"
  }, r.title)), /*#__PURE__*/React.createElement(TableCell, null, r.author), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: statusKind,
    value: r.status
  })), /*#__PURE__*/React.createElement(TableCell, null, r.date))))))) : /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "New ", kind === 'news' ? 'news item' : 'article'), /*#__PURE__*/React.createElement(CardDescription, null, "Saved as draft until you publish")), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, {
    label: "Title",
    htmlFor: "ti"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ti",
    placeholder: "Enter a short, factual title"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Summary",
    htmlFor: "su",
    hint: "Two sentences at most \u2014 this is what people see in the list."
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "su",
    rows: 3,
    placeholder: "Say what changed and what to do about it."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Body",
    htmlFor: "bo"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "bo",
    rows: 7
  }))), /*#__PURE__*/React.createElement("div", {
    className: "td-composefoot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "td-tags"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "secondary"
  }, "Operations"), /*#__PURE__*/React.createElement(Badge, {
    variant: "secondary"
  }, "All properties")), /*#__PURE__*/React.createElement("div", {
    className: "td-composefoot__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Save draft"), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "send"
    })
  }, "Publish"))))));
}
function ProjectsScreen() {
  const {
    Card: C,
    CardHeader: CH,
    CardTitle: CT,
    CardDescription: CD,
    CardContent: CC
  } = TD5;
  return /*#__PURE__*/React.createElement("div", {
    className: "td-stack"
  }, /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(CH, {
    className: "td-cardhead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CT, null, "Projects"), /*#__PURE__*/React.createElement(CD, null, "Stage-tracked work across the group")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus"
    })
  }, "New project")), /*#__PURE__*/React.createElement(CC, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Project"), /*#__PURE__*/React.createElement(TableHead, null, "Owner"), /*#__PURE__*/React.createElement(TableHead, null, "Stage"), /*#__PURE__*/React.createElement(TableHead, null, "Target"))), /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Wanderlust app relaunch"), /*#__PURE__*/React.createElement(TableCell, null, "Dewi Anggraini"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "project_stage",
    value: "active"
  })), /*#__PURE__*/React.createElement(TableCell, null, "Q4 2026")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Property onboarding playbook"), /*#__PURE__*/React.createElement(TableCell, null, "Yudha Prasetya"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "project_stage",
    value: "draft"
  })), /*#__PURE__*/React.createElement(TableCell, null, "Q1 2027")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Legacy PMS migration"), /*#__PURE__*/React.createElement(TableCell, null, "Bagas Nugroho"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "project_stage",
    value: "closed"
  })), /*#__PURE__*/React.createElement(TableCell, null, "Closed Jun 2026")))))), /*#__PURE__*/React.createElement(C, null, /*#__PURE__*/React.createElement(CH, null, /*#__PURE__*/React.createElement(CT, null, "Archived"), /*#__PURE__*/React.createElement(CD, null, "Nothing archived this quarter")), /*#__PURE__*/React.createElement(CC, null, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "archive",
    title: "No archived projects",
    description: "Closed projects move here after 90 days."
  }))));
}
Object.assign(window, {
  ContentScreen,
  ProjectsScreen,
  ActionsMenu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/team-desk/ContentScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/team-desk/LoginScreen.jsx
try { (() => {
const TD2 = window.ArtotelGroupDesignSystem_afa012;
const {
  Field,
  FieldGroup,
  Input,
  Button,
  Checkbox,
  Label,
  Icon,
  Alert,
  AlertDescription
} = TD2;
function LoginScreen({
  onSignIn
}) {
  const [email, setEmail] = React.useState('dewi.anggraini@artotelgroup.com');
  const [error, setError] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError(true);
      return;
    }
    onSignIn();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "td-auth theme-team-desk"
  }, /*#__PURE__*/React.createElement("div", {
    className: "td-auth__art"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/auth-bg.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "td-auth__panel"
  }, /*#__PURE__*/React.createElement("form", {
    className: "td-auth__form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("img", {
    className: "td-auth__logo",
    src: "../../assets/logo-dark.svg",
    alt: "Artotel Group"
  }), /*#__PURE__*/React.createElement("h1", null, "Sign in to Team Desk"), /*#__PURE__*/React.createElement("p", null, "Use your Artotel Group account."), error ? /*#__PURE__*/React.createElement(Alert, {
    variant: "destructive"
  }, /*#__PURE__*/React.createElement(AlertDescription, null, "That does not look like an email address.")) : null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "email"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    value: email,
    invalid: error,
    onChange: e => {
      setEmail(e.target.value);
      setError(false);
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Password",
    htmlFor: "pw",
    action: /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault()
    }, "Forgot?")
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pw",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "td-auth__remember"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: true
  }), /*#__PURE__*/React.createElement(Label, null, "Keep me signed in on this device")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Sign in"), /*#__PURE__*/React.createElement("span", {
    className: "td-auth__foot"
  }, "Access is granted by your property administrator."))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/team-desk/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/team-desk/PeopleScreen.jsx
try { (() => {
const TD4 = window.ArtotelGroupDesignSystem_afa012;
const {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  StatusBadge,
  Avatar,
  Button,
  Icon,
  Input,
  Select,
  Pagination,
  Dialog,
  Field,
  FieldGroup,
  Switch,
  Label,
  Tooltip
} = TD4;
const PEOPLE = [{
  name: 'Reza Baita',
  email: 'reza.baita@artotelgroup.com',
  property: 'Head Office',
  role: 'admin',
  flag: 'active'
}, {
  name: 'Dewi Anggraini',
  email: 'dewi.anggraini@artotelgroup.com',
  property: 'Head Office',
  role: 'headquarter',
  flag: 'active'
}, {
  name: 'Yudha Prasetya',
  email: 'yudha.prasetya@artotelgroup.com',
  property: 'ARTOTEL Thamrin',
  role: 'property',
  flag: 'active'
}, {
  name: 'Sari Wulandari',
  email: 'sari.wulandari@artotelgroup.com',
  property: 'ARTOTEL Sanur',
  role: 'property',
  flag: 'active'
}, {
  name: 'Bagas Nugroho',
  email: 'bagas.nugroho@artotelgroup.com',
  property: 'Head Office',
  role: 'headquarter',
  flag: 'inactive'
}];
function PeopleScreen() {
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "td-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "td-filters"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "search",
    placeholder: "Search people\u2026"
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "All properties",
    options: ['Head Office', 'ARTOTEL Thamrin', 'ARTOTEL Sanur']
  }), /*#__PURE__*/React.createElement(Select, {
    placeholder: "All roles",
    options: ['Admin', 'Headquarter', 'Property']
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "user-plus"
    }),
    onClick: () => setOpen(true)
  }, "Add person")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Person"), /*#__PURE__*/React.createElement(TableHead, null, "Property"), /*#__PURE__*/React.createElement(TableHead, null, "Role"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, null))), /*#__PURE__*/React.createElement(TableBody, null, PEOPLE.map(p => /*#__PURE__*/React.createElement(TableRow, {
    key: p.email
  }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "td-person"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    className: "td-person__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "td-person__name"
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "td-person__mail"
  }, p.email)))), /*#__PURE__*/React.createElement(TableCell, null, p.property), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "role",
    value: p.role
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "activeFlag",
    value: p.flag
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Edit permissions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "icon",
    "aria-label": "Edit"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings"
  })))))))), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageCount: 52,
    total: 1284,
    pageSize: 25,
    onPageChange: setPage
  }))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "Add person",
    description: "They receive an invitation by email.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setOpen(false)
    }, "Send invitation"))
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    htmlFor: "fn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "fn",
    placeholder: "Enter their full name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "em"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "em",
    type: "email",
    placeholder: "Enter your email"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Property",
    htmlFor: "pr"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "pr",
    placeholder: "Head Office",
    options: ['Head Office', 'ARTOTEL Thamrin', 'ARTOTEL Sanur']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Role",
    htmlFor: "rl"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "rl",
    placeholder: "Property",
    options: ['Admin', 'Headquarter', 'Property']
  }))), /*#__PURE__*/React.createElement("div", {
    className: "td-switchrow"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: true
  }), /*#__PURE__*/React.createElement(Label, null, "Send onboarding checklist"))));
}
Object.assign(window, {
  PeopleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/team-desk/PeopleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/team-desk/TeamDashboard.jsx
try { (() => {
const TD3 = window.ArtotelGroupDesignSystem_afa012;
const {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  StatusBadge,
  Button,
  Icon,
  Progress,
  Separator,
  Avatar,
  EmptyState,
  Tabs
} = TD3;

/* Team Desk's dashboard writes KPI deltas as ▲ / ▼ rather than an icon — kept verbatim. */
function DeltaTile({
  label,
  value,
  delta,
  direction,
  note
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
    className: "td-tile"
  }, /*#__PURE__*/React.createElement("span", {
    className: "td-tile__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "td-tile__value"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: 'td-tile__delta td-tile__delta--' + direction
  }, direction === 'up' ? '▲' : '▼', " ", delta, /*#__PURE__*/React.createElement("span", {
    className: "td-tile__note"
  }, note))));
}
function TeamDashboard() {
  const [scope, setScope] = React.useState('week');
  return /*#__PURE__*/React.createElement("div", {
    className: "td-stack"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: scope,
    onChange: setScope,
    tabs: [{
      value: 'week',
      label: 'This week'
    }, {
      value: 'month',
      label: 'This month'
    }, {
      value: 'quarter',
      label: 'Quarter'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "td-tiles"
  }, /*#__PURE__*/React.createElement(DeltaTile, {
    label: "Headcount",
    value: "1,284",
    delta: "18",
    direction: "up",
    note: "vs last month"
  }), /*#__PURE__*/React.createElement(DeltaTile, {
    label: "Open roles",
    value: "37",
    delta: "4",
    direction: "down",
    note: "vs last month"
  }), /*#__PURE__*/React.createElement(DeltaTile, {
    label: "Onboarding",
    value: "22",
    delta: "6",
    direction: "up",
    note: "in progress"
  }), /*#__PURE__*/React.createElement(DeltaTile, {
    label: "Training complete",
    value: "78.4%",
    delta: "1.1%",
    direction: "down",
    note: "vs target"
  })), /*#__PURE__*/React.createElement("div", {
    className: "td-cols"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    className: "td-cardhead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, null, "Onboarding in progress"), /*#__PURE__*/React.createElement(CardDescription, null, "22 people across 14 properties")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus"
    })
  }, "Add person")), /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Person"), /*#__PURE__*/React.createElement(TableHead, null, "Property"), /*#__PURE__*/React.createElement(TableHead, null, "Role"), /*#__PURE__*/React.createElement(TableHead, null, "Progress"), /*#__PURE__*/React.createElement(TableHead, null, "Start"))), /*#__PURE__*/React.createElement(TableBody, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "td-person"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Yudha Prasetya",
    size: 22
  }), "Yudha Prasetya")), /*#__PURE__*/React.createElement(TableCell, null, "ARTOTEL Thamrin"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "role",
    value: "property"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Progress, {
    value: 82
  })), /*#__PURE__*/React.createElement(TableCell, null, "01 Sep")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "td-person"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Sari Wulandari",
    size: 22
  }), "Sari Wulandari")), /*#__PURE__*/React.createElement(TableCell, null, "ARTOTEL Sanur"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "role",
    value: "property"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Progress, {
    value: 46
  })), /*#__PURE__*/React.createElement(TableCell, null, "08 Sep")), /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
    className: "td-person"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Bagas Nugroho",
    size: 22
  }), "Bagas Nugroho")), /*#__PURE__*/React.createElement(TableCell, null, "Head Office"), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "role",
    value: "headquarter"
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Progress, {
    value: 12
  })), /*#__PURE__*/React.createElement(TableCell, null, "15 Sep")))))), /*#__PURE__*/React.createElement("div", {
    className: "td-stack"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Your week"), /*#__PURE__*/React.createElement(CardDescription, null, "Nothing needs your attention this week.")), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "check",
    title: "All clear",
    description: "Nothing needs your attention this week."
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Recent news"), /*#__PURE__*/React.createElement(CardDescription, null, "Published to all properties")), /*#__PURE__*/React.createElement(CardContent, {
    className: "td-newslist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "td-newsrow"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "news_status",
    value: "published"
  }), /*#__PURE__*/React.createElement("span", null, "Wanderlust tier refresh")), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    className: "td-newsrow"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "news_status",
    value: "scheduled"
  }), /*#__PURE__*/React.createElement("span", null, "September rate calendar")), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    className: "td-newsrow"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: "news_status",
    value: "draft"
  }), /*#__PURE__*/React.createElement("span", null, "New property: ARTOTEL Labuan Bajo")))))));
}
Object.assign(window, {
  TeamDashboard,
  DeltaTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/team-desk/TeamDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/team-desk/TeamShell.jsx
try { (() => {
const TD = window.ArtotelGroupDesignSystem_afa012;
const {
  SidebarNav,
  Avatar,
  Icon,
  Breadcrumb
} = TD;
const TEAM_NAV = [{
  name: 'Dashboard',
  href: '/dashboard',
  icon: 'layout-dashboard'
}, {
  name: 'People',
  icon: 'users',
  children: [{
    name: 'Directory',
    href: '/people/directory'
  }, {
    name: 'Roles',
    href: '/people/roles'
  }]
}, {
  name: 'Content',
  icon: 'newspaper',
  children: [{
    name: 'News',
    href: '/content/news'
  }, {
    name: 'Knowledge Base',
    href: '/content/kb'
  }]
}, {
  name: 'Projects',
  href: '/projects',
  icon: 'folder-kanban'
}];
function TeamShell({
  activeHref,
  onNavigate,
  crumbs,
  title,
  description,
  actions,
  children,
  onSignOut
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "td-shell theme-team-desk"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ag-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ag-sidebar__header td-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logomark.png",
    alt: "Artotel Group",
    width: "26",
    height: "26"
  }), /*#__PURE__*/React.createElement("span", null, "Team Desk")), /*#__PURE__*/React.createElement("div", {
    className: "td-navwrap",
    onClick: e => {
      const a = e.target.closest('a[href]');
      if (a) {
        e.preventDefault();
        onNavigate(a.getAttribute('href'));
      }
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    items: TEAM_NAV,
    activeHref: activeHref
  })), /*#__PURE__*/React.createElement("div", {
    className: "ag-sidebar__footer td-userrow"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dewi Anggraini",
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    className: "td-userrow__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "td-userrow__name"
  }, "Dewi Anggraini"), /*#__PURE__*/React.createElement("span", {
    className: "td-userrow__meta"
  }, "Headquarter")), /*#__PURE__*/React.createElement("button", {
    className: "ag-btn ag-btn--ghost ag-btn--size-icon",
    "aria-label": "Sign out",
    onClick: onSignOut
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "td-main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "td-topbar"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: crumbs
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Dewi Anggraini",
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    className: "td-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "td-pagehead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, title), description ? /*#__PURE__*/React.createElement("p", null, description) : null), /*#__PURE__*/React.createElement("div", {
    className: "td-pagehead__actions"
  }, actions)), children)));
}
Object.assign(window, {
  TeamShell,
  TEAM_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/team-desk/TeamShell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.AlertTitle = __ds_scope.AlertTitle;

__ds_ns.AlertDescription = __ds_scope.AlertDescription;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.STATUS_TOKENS = __ds_scope.STATUS_TOKENS;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.TableHeader = __ds_scope.TableHeader;

__ds_ns.TableBody = __ds_scope.TableBody;

__ds_ns.TableFooter = __ds_scope.TableFooter;

__ds_ns.TableRow = __ds_scope.TableRow;

__ds_ns.TableHead = __ds_scope.TableHead;

__ds_ns.TableCell = __ds_scope.TableCell;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.FieldGroup = __ds_scope.FieldGroup;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TabsContent = __ds_scope.TabsContent;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
