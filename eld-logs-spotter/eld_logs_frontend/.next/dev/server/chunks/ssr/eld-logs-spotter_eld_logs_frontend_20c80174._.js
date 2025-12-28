module.exports = [
"[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/ui/scroll-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/eld-logs-spotter/eld_logs_frontend/hooks/use-toast.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const _actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
;
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@radix-ui/react-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("ring-offset-background hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground/50 hover:text-foreground absolute top-2 right-2 rounded-md p-1 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:ring-2 focus:outline-none group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toaster.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toast.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Toaster() {
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TripForm",
    ()=>TripForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$form$2f$dist$2f$esm$2f$useForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@tanstack/react-form/dist/esm/useForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/navigation.js [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// VALIDATION SCHEMAS
const locationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "Location must be at least 3 characters").max(255, "Location must be less than 255 characters");
const cycleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0, "Cycle hours cannot be negative").max(70, "Cycle hours cannot exceed 70");
function TripForm({ onSubmit, isLoading = false, disabled = false }) {
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$form$2f$dist$2f$esm$2f$useForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            current_location: "",
            pickup_location: "",
            dropoff_location: "",
            current_cycle_used: 0
        },
        onSubmit: async ({ value })=>{
            await onSubmit(value);
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: (e)=>{
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
        },
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(form.Field, {
                name: "current_location",
                validators: {
                    onChange: ({ value })=>{
                        const result = locationSchema.safeParse(value);
                        return result.success ? undefined : result.error.errors[0]?.message;
                    }
                },
                children: (field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: field.name,
                                children: "Current Location"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "text-muted-foreground absolute top-3 left-3 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: field.name,
                                        name: field.name,
                                        placeholder: "e.g. Los Angeles, CA",
                                        className: "bg-background/50 border-border pl-9",
                                        disabled: isLoading || disabled,
                                        value: field.state.value,
                                        onBlur: field.handleBlur,
                                        onChange: (e)=>field.handleChange(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            field.state.meta.isTouched && field.state.meta.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-destructive text-sm font-medium",
                                children: field.state.meta.errors.join(", ")
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(form.Field, {
                name: "pickup_location",
                validators: {
                    onChange: ({ value })=>{
                        const result = locationSchema.safeParse(value);
                        return result.success ? undefined : result.error.errors[0]?.message;
                    }
                },
                children: (field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: field.name,
                                children: "Pickup Location"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                        className: "text-muted-foreground absolute top-3 left-3 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: field.name,
                                        name: field.name,
                                        placeholder: "e.g. Phoenix, AZ",
                                        className: "bg-background/50 border-border pl-9",
                                        disabled: isLoading || disabled,
                                        value: field.state.value,
                                        onBlur: field.handleBlur,
                                        onChange: (e)=>field.handleChange(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            field.state.meta.isTouched && field.state.meta.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-destructive text-sm font-medium",
                                children: field.state.meta.errors.join(", ")
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(form.Field, {
                name: "dropoff_location",
                validators: {
                    onChange: ({ value })=>{
                        const result = locationSchema.safeParse(value);
                        return result.success ? undefined : result.error.errors[0]?.message;
                    }
                },
                children: (field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: field.name,
                                children: "Dropoff Location"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "text-muted-foreground absolute top-3 left-3 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: field.name,
                                        name: field.name,
                                        placeholder: "e.g. Dallas, TX",
                                        className: "bg-background/50 border-border pl-9",
                                        disabled: isLoading || disabled,
                                        value: field.state.value,
                                        onBlur: field.handleBlur,
                                        onChange: (e)=>field.handleChange(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            field.state.meta.isTouched && field.state.meta.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-destructive text-sm font-medium",
                                children: field.state.meta.errors.join(", ")
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 155,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(form.Field, {
                name: "current_cycle_used",
                validators: {
                    onChange: ({ value })=>{
                        const result = cycleSchema.safeParse(value);
                        return result.success ? undefined : result.error.errors[0]?.message;
                    }
                },
                children: (field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: field.name,
                                children: "Current Cycle Used (hrs)"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "text-muted-foreground absolute top-3 left-3 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: field.name,
                                        name: field.name,
                                        type: "number",
                                        step: "0.5",
                                        min: "0",
                                        max: "70",
                                        placeholder: "0",
                                        className: "bg-background/50 border-border pl-9",
                                        disabled: isLoading || disabled,
                                        value: field.state.value,
                                        onBlur: field.handleBlur,
                                        onChange: (e)=>field.handleChange(parseFloat(e.target.value) || 0)
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            field.state.meta.isTouched && field.state.meta.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-destructive text-sm font-medium",
                                children: field.state.meta.errors.join(", ")
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                lineNumber: 197,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(form.Subscribe, {
                selector: (state)=>[
                        state.canSubmit,
                        state.isSubmitting
                    ],
                children: ([canSubmit, isSubmitting])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        className: "bg-primary hover:bg-primary/90 w-full",
                        disabled: !canSubmit || isLoading || disabled || isSubmitting,
                        children: isLoading || isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this),
                                "Calculating..."
                            ]
                        }, void 0, true) : "Calculate Route"
                    }, void 0, false, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TripLogs",
    ()=>TripLogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function TripLogs({ tripId, logs, isLoading = false, onDownload, downloadingDay, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-border", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "border-border/50 border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "text-primary h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium tracking-tight uppercase",
                                    children: "Compliance Logs (ELD)"
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "text-xs",
                            children: "FMCSA HOS v2.4"
                        }, void 0, false, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-border divide-y",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground flex flex-col items-center gap-3 p-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-10 w-10 animate-spin opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Loading logs..."
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this) : !tripId || logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground flex flex-col items-center gap-3 p-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "h-10 w-10 opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "No daily logs generated for this session"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this) : logs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hover:bg-muted/30 flex items-center justify-between p-4 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-muted border-border flex h-10 w-10 items-center justify-center rounded border",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold",
                                                children: [
                                                    "D",
                                                    log.day
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium",
                                                    children: [
                                                        "Daily Log - Day ",
                                                        log.day
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-xs",
                                                    children: [
                                                        log.date,
                                                        " • ",
                                                        log.total_miles,
                                                        " miles"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this),
                                                log.from_address && log.to_address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground max-w-50 truncate text-xs",
                                                    children: [
                                                        log.from_address,
                                                        " → ",
                                                        log.to_address
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        className: "border-primary/50 text-primary hover:bg-primary/10 h-8 gap-1.5 bg-transparent text-xs",
                                        onClick: ()=>onDownload(log.day),
                                        disabled: downloadingDay === log.day,
                                        children: [
                                            downloadingDay === log.day ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-3.5 w-3.5 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                                lineNumber: 90,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                                lineNumber: 92,
                                                columnNumber: 23
                                            }, this),
                                            "Download PNG"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, log.day, true, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/ui/progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TripMap",
    ()=>TripMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/navigation.js [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// Get the base URL for media files (without /api)
const getMediaBaseUrl = ()=>{
    const apiUrl = ("TURBOPACK compile-time value", "http://localhost:8000/api") || "http://localhost:8000/api";
    return apiUrl.replace("/api", "");
};
// Convert relative media URL to full URL
const getFullMapUrl = (mapUrl)=>{
    if (!mapUrl) return null;
    // If it's already a full URL, return as-is
    if (mapUrl.startsWith("http://") || mapUrl.startsWith("https://")) {
        return mapUrl;
    }
    // Prepend the media base URL
    return `${getMediaBaseUrl()}${mapUrl}`;
};
function TripMap({ tripId: propTripId, mapUrl: propMapUrl, mapStatus: propMapStatus, mapProgress: propMapProgress = 0, isMapReady: propIsMapReady, isLoading = false, onDownload, onRetry, isDownloading = false, className, trip }) {
    // Support both individual props and trip object
    const tripId = propTripId ?? trip?.id ?? null;
    const mapUrl = propMapUrl ?? trip?.map_url ?? null;
    const mapStatus = propMapStatus ?? trip?.map_status ?? null;
    const mapProgress = propMapProgress ?? trip?.map_progress ?? 0;
    const isMapReady = propIsMapReady ?? trip?.is_map_ready ?? false;
    const [imageError, setImageError] = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    // Get the full URL for the map image
    const fullMapUrl = getFullMapUrl(mapUrl);
    // Reset image error when URL changes
    __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setImageError(false);
    }, [
        mapUrl
    ]);
    const renderContent = ()=>{
        // Loading state
        if (isLoading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-background/80 border-primary/20 space-y-3 rounded-lg border p-6 text-center shadow-2xl backdrop-blur",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "text-primary mx-auto h-8 w-8 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-primary font-mono text-xs tracking-widest uppercase",
                            children: "Processing Trip..."
                        }, void 0, false, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this);
        }
        // No trip selected
        if (!tripId) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-center opacity-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                            className: "text-primary/40 mx-auto h-12 w-12"
                        }, void 0, false, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-primary/60 text-sm font-medium",
                            children: "Enter details to see route geometry"
                        }, void 0, false, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this);
        }
        // Map is generating
        if (mapStatus === "generating") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-background/80 border-primary/20 space-y-3 rounded-lg border p-6 text-center shadow-2xl backdrop-blur",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "text-primary mx-auto h-8 w-8 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-primary font-mono text-xs tracking-widest uppercase",
                                    children: "Generating Map..."
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-40",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: mapProgress,
                                        className: "h-1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-xs",
                                    children: [
                                        mapProgress,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this);
        }
        // Map generation failed
        if (mapStatus === "failed") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-background/80 border-destructive/20 space-y-3 rounded-lg border p-6 text-center shadow-2xl backdrop-blur",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "text-destructive mx-auto h-8 w-8"
                        }, void 0, false, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-destructive text-sm font-medium",
                                    children: "Map generation failed"
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: onRetry,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "mr-2 h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this),
                                        "Retry"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this);
        }
        // Map is ready - show image with full URL
        if (isMapReady && fullMapUrl && !imageError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: fullMapUrl,
                alt: "Route Map",
                fill: true,
                className: "object-contain",
                onError: ()=>setImageError(true),
                unoptimized: true
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this);
        }
        // Map not started or image failed to load
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 text-center opacity-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                        className: "text-primary/40 mx-auto h-12 w-12"
                    }, void 0, false, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-primary/60 text-sm font-medium",
                        children: imageError ? "Failed to load map image" : "Map will appear here"
                    }, void 0, false, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-border overflow-hidden bg-slate-950", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "bg-background/40 border-border/50 border-b backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                    className: "text-primary h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium tracking-tight uppercase",
                                    children: "Route Visualization"
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            className: "border-border/50 h-8 gap-1.5 border text-xs",
                            onClick: onDownload,
                            disabled: !isMapReady || isDownloading,
                            children: [
                                isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-3.5 w-3.5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this),
                                "Download Map"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "relative aspect-video bg-slate-900 p-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-linear-to-br from-blue-950/20 to-slate-900/80"
                    }, void 0, false, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    renderContent()
                ]
            }, void 0, true, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TripProgress",
    ()=>TripProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapIcon$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as MapIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/route.js [app-ssr] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/wifi.js [app-ssr] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-ssr] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function TripProgress({ progress, className }) {
    const { status, overallProgress, mapStatus, mapProgress, message, stage, error, isConnected, isCompleted, isMapReady } = progress;
    // Determine status colors and icons
    const getStatusBadge = ()=>{
        if (error) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "destructive",
                className: "gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    "Failed"
                ]
            }, void 0, true, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this);
        }
        if (isCompleted && isMapReady) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "default",
                className: "gap-1 bg-green-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    "Complete"
                ]
            }, void 0, true, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this);
        }
        if (status === "processing" || mapStatus === "generating") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "secondary",
                className: "gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-3 w-3 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    "Processing"
                ]
            }, void 0, true, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "gap-1",
            children: "Pending"
        }, void 0, false, {
            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    };
    // Stage indicators
    const stages = [
        {
            id: "geocoding",
            label: "Geocoding",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapIcon$3e$__["MapIcon"],
            complete: (progress.progress ?? 0) >= 25
        },
        {
            id: "routing",
            label: "Route Calculation",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"],
            complete: (progress.progress ?? 0) >= 50
        },
        {
            id: "hos_calculation",
            label: "HOS Compliance",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            complete: (progress.progress ?? 0) >= 75
        },
        {
            id: "map_generation",
            label: "Map Generation",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapIcon$3e$__["MapIcon"],
            complete: isMapReady
        }
    ];
    if (!progress.tripId) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-primary/20 bg-primary/5", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm font-medium",
                            children: "Processing Trip"
                        }, void 0, false, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                    className: "h-3 w-3 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                    className: "text-muted-foreground h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                getStatusBadge()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Overall Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            overallProgress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                value: overallProgress,
                                className: "h-2"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground truncate text-xs",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-destructive/10 rounded-md p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-destructive text-xs",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-2",
                        children: stages.map((stageItem)=>{
                            const Icon = stageItem.icon;
                            const isActive = stage === stageItem.id;
                            const isComplete = stageItem.complete;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-1 rounded-md p-2 text-center transition-colors", isActive && "bg-primary/10", isComplete && "text-green-600"),
                                children: [
                                    isComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                        lineNumber: 161,
                                        columnNumber: 19
                                    }, this) : isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "text-muted-foreground h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                        lineNumber: 165,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] leading-tight",
                                        children: stageItem.label
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, stageItem.id, true, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    mapStatus === "generating" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-border/50 space-y-2 border-t pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Map Generation"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            mapProgress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                value: mapProgress,
                                className: "h-1.5"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/eld-logs-spotter/eld_logs_frontend/lib/api/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiException",
    ()=>ApiException
]);
class ApiException extends Error {
    statusCode;
    data;
    constructor(statusCode, data){
        super(data.message || "An error occurred"), this.statusCode = statusCode, this.data = data;
        this.name = "ApiException";
    }
}
}),
"[project]/eld-logs-spotter/eld_logs_frontend/lib/api/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadBlob",
    ()=>downloadBlob,
    "formatDistance",
    ()=>formatDistance,
    "formatDuration",
    ()=>formatDuration,
    "formatTripDays",
    ()=>formatTripDays,
    "tripApi",
    ()=>tripApi,
    "tripKeys",
    ()=>tripKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/api/types.ts [app-ssr] (ecmascript)");
;
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api") || "http://localhost:8000/api";
async function apiFetch(endpoint, options = {}) {
    const { params, ...fetchOptions } = options;
    // Build URL with query params
    let url = `${API_BASE_URL}${endpoint}`;
    if (params) {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value])=>{
            if (value !== undefined) {
                searchParams.append(key, String(value));
            }
        });
        const queryString = searchParams.toString();
        if (queryString) {
            url += `?${queryString}`;
        }
    }
    // Default headers
    const headers = {
        "Content-Type": "application/json",
        ...fetchOptions.headers
    };
    const response = await fetch(url, {
        ...fetchOptions,
        headers
    });
    // Handle non-JSON responses (like file downloads)
    const contentType = response.headers.get("content-type");
    if (contentType?.includes("image/") || contentType?.includes("application/octet-stream")) {
        if (!response.ok) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiException"](response.status, {
                error: true,
                status_code: response.status,
                message: "Failed to download file"
            });
        }
        return response.blob();
    }
    // Parse JSON response
    let data;
    try {
        data = await response.json();
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiException"](response.status, {
            error: true,
            status_code: response.status,
            message: "Invalid response from server"
        });
    }
    // Handle error responses
    if (!response.ok) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiException"](response.status, data);
    }
    return data;
}
const tripApi = {
    /**
   * List all trips with pagination
   */ list: async (page = 1)=>{
        return apiFetch("/trips/", {
            params: {
                page
            }
        });
    },
    /**
   * Get a single trip by ID
   */ get: async (tripId)=>{
        return apiFetch(`/trips/${tripId}/`);
    },
    /**
   * Calculate a new trip route
   */ calculate: async (data)=>{
        return apiFetch("/trips/calculate/", {
            method: "POST",
            body: JSON.stringify(data)
        });
    },
    /**
   * Get trip calculation result
   */ getResult: async (tripId)=>{
        return apiFetch(`/trips/${tripId}/result/`);
    },
    /**
   * Get trip status (for polling)
   */ getStatus: async (tripId)=>{
        return apiFetch(`/trips/${tripId}/status/`);
    },
    /**
   * Get trip summary
   */ getSummary: async (tripId)=>{
        return apiFetch(`/trips/${tripId}/summary/`);
    },
    /**
   * List daily logs for a trip
   */ listLogs: async (tripId)=>{
        return apiFetch(`/trips/${tripId}/logs/`);
    },
    /**
   * Download daily log image
   */ downloadLog: async (tripId, day)=>{
        return apiFetch(`/trips/${tripId}/download-log/`, {
            params: {
                day
            }
        });
    },
    /**
   * Download route map image
   */ downloadMap: async (tripId)=>{
        const response = await fetch(`${API_BASE_URL}/trips/${tripId}/download-map/`);
        // Check if map is still generating (202 response)
        if (response.status === 202) {
            return response.json();
        }
        if (!response.ok) {
            const error = await response.json();
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiException"](response.status, error);
        }
        return response.blob();
    },
    /**
   * Retry failed map generation
   */ retryMap: async (tripId)=>{
        return apiFetch(`/trips/${tripId}/retry-map/`, {
            method: "POST"
        });
    },
    /**
   * Delete a trip
   */ delete: async (tripId)=>{
        await apiFetch(`/trips/${tripId}/`, {
            method: "DELETE"
        });
    }
};
function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function formatDistance(miles) {
    if (miles === null || miles === undefined) return "--";
    return `${miles.toLocaleString(undefined, {
        maximumFractionDigits: 1
    })} mi`;
}
function formatDuration(hours) {
    if (hours === null || hours === undefined) return "--";
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    if (h === 0) return `${m}m`;
    if (m === 0) return `${h}h`;
    return `${h}h ${m}m`;
}
function formatTripDays(tripOrHours) {
    if (tripOrHours === null || tripOrHours === undefined) return "--";
    let hours;
    if (typeof tripOrHours === "number") {
        hours = tripOrHours;
    } else {
        hours = tripOrHours.total_trip_time;
    }
    if (hours === null || hours === undefined) return "--";
    const days = Math.ceil(hours / 24);
    return `${days} day${days !== 1 ? "s" : ""}`;
}
const tripKeys = {
    all: [
        "trips"
    ],
    lists: ()=>[
            ...tripKeys.all,
            "list"
        ],
    list: (page)=>[
            ...tripKeys.lists(),
            {
                page
            }
        ],
    details: ()=>[
            ...tripKeys.all,
            "detail"
        ],
    detail: (id)=>[
            ...tripKeys.details(),
            id
        ],
    status: (id)=>[
            ...tripKeys.all,
            "status",
            id
        ],
    summary: (id)=>[
            ...tripKeys.all,
            "summary",
            id
        ],
    logs: (id)=>[
            ...tripKeys.all,
            "logs",
            id
        ]
};
}),
"[project]/eld-logs-spotter/eld_logs_frontend/hooks/use-trip.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/use-trip.ts
__turbopack_context__.s([
    "useCalculateTrip",
    ()=>useCalculateTrip,
    "useDeleteTrip",
    ()=>useDeleteTrip,
    "useDownloadLog",
    ()=>useDownloadLog,
    "useDownloadMap",
    ()=>useDownloadMap,
    "useRetryMap",
    ()=>useRetryMap,
    "useTrip",
    ()=>useTrip,
    "useTripActions",
    ()=>useTripActions,
    "useTripLogs",
    ()=>useTripLogs,
    "useTripStatus",
    ()=>useTripStatus,
    "useTripSummary",
    ()=>useTripSummary,
    "useTrips",
    ()=>useTrips
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
function useTrips(page = 1) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].list(page),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripApi"].list(page)
    });
}
function useTrip(tripId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].detail(tripId),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripApi"].getResult(tripId),
        enabled: !!tripId
    });
}
function useTripStatus(tripId, enabled = true) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].status(tripId),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripApi"].getStatus(tripId),
        enabled: !!tripId && enabled,
        refetchInterval: (query)=>{
            const data = query.state.data;
            // Stop polling if completed or failed
            if (data?.status === "completed" && data?.is_map_ready) {
                return false;
            }
            if (data?.status === "failed") {
                return false;
            }
            return 2000; // Poll every 2 seconds
        }
    });
}
function useTripSummary(tripId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].summary(tripId),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripApi"].getSummary(tripId),
        enabled: !!tripId
    });
}
function useTripLogs(tripId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].logs(tripId),
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripApi"].listLogs(tripId),
        enabled: !!tripId
    });
}
function useCalculateTrip() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripApi"].calculate(data),
        onSuccess: ()=>{
            // Invalidate trips list to refetch
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].lists()
            });
        }
    });
}
function useDeleteTrip() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (tripId)=>__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripApi"].delete(tripId),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].lists()
            });
        }
    });
}
function useRetryMap() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (tripId)=>__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripApi"].retryMap(tripId),
        onSuccess: (_, tripId)=>{
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].status(tripId)
            });
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].detail(tripId)
            });
        }
    });
}
function useDownloadLog() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async ({ tripId, day, filename })=>{
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripApi"].downloadLog(tripId, day);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadBlob"])(blob, filename || `eld_log_trip_${tripId}_day_${day}.png`);
            return true;
        }
    });
}
function useDownloadMap() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async ({ tripId, filename })=>{
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripApi"].downloadMap(tripId);
            if (result instanceof Blob) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadBlob"])(result, filename || `route_map_trip_${tripId}.png`);
                return {
                    success: true
                };
            } else {
                // Map is still generating
                return {
                    success: false,
                    message: result.message || "Map is still generating"
                };
            }
        }
    });
}
function useTripActions() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const calculateMutation = useCalculateTrip();
    const deleteMutation = useDeleteTrip();
    const retryMapMutation = useRetryMap();
    const downloadLogMutation = useDownloadLog();
    const downloadMapMutation = useDownloadMap();
    return {
        calculateTrip: calculateMutation.mutateAsync,
        isCalculating: calculateMutation.isPending,
        calculateError: calculateMutation.error,
        deleteTrip: deleteMutation.mutateAsync,
        isDeleting: deleteMutation.isPending,
        deleteError: deleteMutation.error,
        retryMap: retryMapMutation.mutateAsync,
        isRetryingMap: retryMapMutation.isPending,
        retryMapError: retryMapMutation.error,
        downloadLog: downloadLogMutation.mutateAsync,
        isDownloadingLog: downloadLogMutation.isPending,
        downloadLogError: downloadLogMutation.error,
        downloadMap: downloadMapMutation.mutateAsync,
        isDownloadingMap: downloadMapMutation.isPending,
        downloadMapError: downloadMapMutation.error,
        invalidateTrips: ()=>queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].all
            })
    };
}
}),
"[project]/eld-logs-spotter/eld_logs_frontend/lib/websocket/trip-progress.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TripProgressPoller",
    ()=>TripProgressPoller,
    "TripProgressService",
    ()=>TripProgressService
]);
class TripProgressService {
    socket = null;
    tripId;
    options;
    reconnectAttempts = 0;
    reconnectTimeout = null;
    pingInterval = null;
    isManualClose = false;
    constructor(tripId, options){
        this.tripId = tripId;
        this.options = {
            onProgress: options.onProgress,
            onError: options.onError || (()=>{}),
            onConnectionChange: options.onConnectionChange || (()=>{}),
            maxReconnectAttempts: options.maxReconnectAttempts ?? 5,
            reconnectDelay: options.reconnectDelay ?? 1000
        };
    }
    /**
   * Connect to WebSocket
   */ connect() {
        if (this.socket?.readyState === WebSocket.OPEN) {
            return;
        }
        this.isManualClose = false;
        const wsBaseUrl = ("TURBOPACK compile-time value", "ws://localhost:8000/ws") || "ws://localhost:8000/ws";
        const wsUrl = `${wsBaseUrl}/trips/${this.tripId}/progress/`;
        try {
            this.socket = new WebSocket(wsUrl);
            this.socket.onopen = ()=>{
                console.log(`[WS] Connected to trip ${this.tripId}`);
                this.reconnectAttempts = 0;
                this.options.onConnectionChange(true);
                this.startPingInterval();
            };
            this.socket.onmessage = (event)=>{
                try {
                    const data = JSON.parse(event.data);
                    if (data.type === "pong") {
                        return; // Ignore pong responses
                    }
                    this.options.onProgress(data);
                } catch (error) {
                    console.error("[WS] Failed to parse message:", error);
                }
            };
            this.socket.onclose = (event)=>{
                console.log(`[WS] Disconnected from trip ${this.tripId}:`, event.code);
                this.options.onConnectionChange(false);
                this.stopPingInterval();
                // Attempt reconnection if not manually closed
                if (!this.isManualClose && !event.wasClean) {
                    this.attemptReconnect();
                }
            };
            this.socket.onerror = (error)=>{
                console.error("[WS] Error:", error);
                this.options.onError(new Error("WebSocket connection error"));
            };
        } catch (error) {
            this.options.onError(error);
        }
    }
    /**
   * Disconnect from WebSocket
   */ disconnect() {
        this.isManualClose = true;
        this.stopPingInterval();
        this.clearReconnectTimeout();
        if (this.socket) {
            this.socket.close(1000, "Client disconnecting");
            this.socket = null;
        }
    }
    /**
   * Request current status
   */ requestStatus() {
        this.send({
            type: "get_status"
        });
    }
    /**
   * Send ping to keep connection alive
   */ ping() {
        this.send({
            type: "ping"
        });
    }
    /**
   * Check if connected
   */ isConnected() {
        return this.socket?.readyState === WebSocket.OPEN;
    }
    // PRIVATE METHODS
    send(data) {
        if (this.socket?.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(data));
        }
    }
    attemptReconnect() {
        if (this.reconnectAttempts >= this.options.maxReconnectAttempts) {
            console.log("[WS] Max reconnection attempts reached");
            this.options.onError(new Error("Max reconnection attempts reached"));
            return;
        }
        this.reconnectAttempts++;
        const delay = this.options.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
        console.log(`[WS] Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts})`);
        this.reconnectTimeout = setTimeout(()=>{
            this.connect();
        }, delay);
    }
    clearReconnectTimeout() {
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
    }
    startPingInterval() {
        this.stopPingInterval();
        // Ping every 30 seconds to keep connection alive
        this.pingInterval = setInterval(()=>{
            this.ping();
        }, 30000);
    }
    stopPingInterval() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
        }
    }
}
class TripProgressPoller {
    tripId;
    options;
    intervalId = null;
    pollInterval;
    constructor(tripId, options, pollInterval = 2000){
        this.tripId = tripId;
        this.options = {
            onProgress: options.onProgress,
            onError: options.onError || (()=>{}),
            onConnectionChange: options.onConnectionChange || (()=>{}),
            maxReconnectAttempts: 0,
            reconnectDelay: 0
        };
        this.pollInterval = pollInterval;
    }
    /**
   * Start polling
   */ start() {
        this.options.onConnectionChange(true);
        this.poll(); // Initial poll
        this.intervalId = setInterval(()=>this.poll(), this.pollInterval);
    }
    /**
   * Stop polling
   */ stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.options.onConnectionChange(false);
    }
    /**
   * Check if polling is active
   */ isActive() {
        return this.intervalId !== null;
    }
    async poll() {
        try {
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8000/api") || "http://localhost:8000/api"}/trips/${this.tripId}/status/`);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            const data = await response.json();
            const progressMessage = {
                type: "progress",
                trip_id: this.tripId,
                status: data.status,
                progress: data.overall_progress,
                map_status: data.map_status,
                map_progress: data.map_progress,
                map_url: data.map_url,
                total_distance: data.total_distance,
                total_driving_time: data.total_driving_time,
                is_completed: data.is_completed,
                is_map_ready: data.is_map_ready,
                error: data.error_message
            };
            this.options.onProgress(progressMessage);
            // Stop polling if completed or failed
            if (data.status === "completed" && data.map_status === "completed" || data.status === "failed") {
                this.stop();
            }
        } catch (error) {
            this.options.onError(error);
        }
    }
}
}),
"[project]/eld-logs-spotter/eld_logs_frontend/hooks/use-trip-progress.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTripProgress",
    ()=>useTripProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$websocket$2f$trip$2d$progress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/websocket/trip-progress.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const initialState = {
    tripId: null,
    status: null,
    progress: 0,
    mapStatus: null,
    mapProgress: 0,
    overallProgress: 0,
    message: "",
    stage: "",
    error: null,
    totalDistance: null,
    totalDrivingTime: null,
    numDays: null,
    mapUrl: null,
    isCompleted: false,
    isMapReady: false,
    isConnected: false
};
function useTripProgress(tripId, options = {}) {
    const { useWebSocket = true, pollInterval = 2000, onComplete, onError } = options;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [internalState, setInternalState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const serviceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    const onErrorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onError);
    // Update refs when callbacks change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onCompleteRef.current = onComplete;
        onErrorRef.current = onError;
    }, [
        onComplete,
        onError
    ]);
    const handleProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message)=>{
        setInternalState((prev)=>{
            const newState = {
                ...prev,
                tripId: message.trip_id,
                status: message.status || prev.status,
                progress: message.progress ?? prev.progress,
                mapStatus: message.map_status || prev.mapStatus,
                mapProgress: message.map_progress ?? prev.mapProgress,
                overallProgress: message.overall_progress ?? prev.overallProgress,
                message: message.message || prev.message,
                stage: message.stage || prev.stage,
                error: message.error || null,
                totalDistance: message.total_distance ?? prev.totalDistance,
                totalDrivingTime: message.total_driving_time ?? prev.totalDrivingTime,
                numDays: message.num_days ?? prev.numDays,
                mapUrl: message.map_url || prev.mapUrl,
                isCompleted: message.is_completed ?? prev.isCompleted,
                isMapReady: message.is_map_ready ?? prev.isMapReady,
                isConnected: prev.isConnected
            };
            // Trigger completion callback
            if (newState.isCompleted && newState.isMapReady && !prev.isMapReady) {
                setTimeout(()=>{
                    onCompleteRef.current?.(message.trip_id);
                }, 0);
            }
            // Trigger error callback
            if (message.error && !prev.error) {
                setTimeout(()=>{
                    onErrorRef.current?.(message.error);
                }, 0);
            }
            return newState;
        });
    }, []);
    const handleError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((error)=>{
        console.error("[TripProgress] Error:", error);
        setInternalState((prev)=>({
                ...prev,
                error: error.message
            }));
        onErrorRef.current?.(error.message);
    }, []);
    const handleConnectionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((connected)=>{
        setInternalState((prev)=>({
                ...prev,
                isConnected: connected
            }));
    }, []);
    // Connect/disconnect based on tripId
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!tripId) {
            return;
        }
        // Create appropriate service
        if (useWebSocket && typeof WebSocket !== "undefined") {
            serviceRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$websocket$2f$trip$2d$progress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TripProgressService"](tripId, {
                onProgress: handleProgress,
                onError: handleError,
                onConnectionChange: handleConnectionChange
            });
            serviceRef.current.connect();
        } else {
            serviceRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$websocket$2f$trip$2d$progress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TripProgressPoller"](tripId, {
                onProgress: handleProgress,
                onError: handleError,
                onConnectionChange: handleConnectionChange
            }, pollInterval);
            serviceRef.current.start();
        }
        // Cleanup
        return ()=>{
            if (serviceRef.current) {
                if (serviceRef.current instanceof __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$websocket$2f$trip$2d$progress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TripProgressService"]) {
                    serviceRef.current.disconnect();
                } else {
                    serviceRef.current.stop();
                }
                serviceRef.current = null;
            }
        };
    }, [
        tripId,
        useWebSocket,
        pollInterval,
        handleProgress,
        handleError,
        handleConnectionChange
    ]);
    // Derive state: return initialState when no tripId
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!tripId) {
            return initialState;
        }
        return internalState;
    }, [
        tripId,
        internalState
    ]);
    // Invalidate queries when trip is completed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.isCompleted && state.isMapReady && tripId) {
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].detail(tripId)
            });
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].logs(tripId)
            });
            queryClient.invalidateQueries({
                queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tripKeys"].lists()
            });
        }
    }, [
        state.isCompleted,
        state.isMapReady,
        tripId,
        queryClient
    ]);
    // Manual refresh
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (serviceRef.current instanceof __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$websocket$2f$trip$2d$progress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TripProgressService"]) {
            serviceRef.current.requestStatus();
        }
    }, []);
    return {
        ...state,
        refresh
    };
}
}),
"[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TripDashboard",
    ()=>TripDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/history.js [app-ssr] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/ui/toaster.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$trip$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/trip-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$trip$2d$logs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/trip-logs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$trip$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/trip-map.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$trip$2d$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/components/trip-progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$trip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/hooks/use-trip.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$trip$2d$progress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/hooks/use-trip-progress.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/eld-logs-spotter/eld_logs_frontend/lib/api/client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function TripDashboard() {
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    // State
    const [currentTripId, setCurrentTripId] = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [downloadingDay, setDownloadingDay] = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    // React Query hooks
    const { data: tripsData, isLoading: isLoadingTrips, refetch: refetchTrips } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$trip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTrips"])(1);
    const { data: currentTrip, isLoading: isLoadingTrip, refetch: refetchTrip } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$trip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTrip"])(currentTripId);
    const { data: logsData, isLoading: isLoadingLogs, refetch: refetchLogs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$trip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTripLogs"])(currentTripId);
    // Mutations
    const calculateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$trip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCalculateTrip"])();
    const downloadLogMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$trip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDownloadLog"])();
    const downloadMapMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$trip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDownloadMap"])();
    const retryMapMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$trip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRetryMap"])();
    // Derived state
    const recentTrips = tripsData?.results.slice(0, 5) ?? [];
    const logs = logsData?.logs ?? [];
    // Progress tracking via WebSocket
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$hooks$2f$use$2d$trip$2d$progress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTripProgress"])(currentTripId, {
        onComplete: async (_tripId)=>{
            toast({
                title: "Trip Complete",
                description: "Your route and HOS logs have been generated."
            });
            // Refetch trip and logs data
            await refetchTrip();
            await refetchLogs();
            await refetchTrips();
        },
        onError: (error)=>{
            toast({
                title: "Error",
                description: error,
                variant: "destructive"
            });
        }
    });
    // Handle form submission
    const handleCalculate = async (data)=>{
        try {
            const result = await calculateMutation.mutateAsync(data);
            if (result) {
                setCurrentTripId(result.id);
                toast({
                    title: "Trip Created",
                    description: "Calculating your route and generating HOS logs..."
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to calculate trip",
                variant: "destructive"
            });
        }
    };
    // Handle loading a previous trip
    const handleLoadTrip = (tripId)=>{
        setCurrentTripId(tripId);
    };
    // Handle downloading a daily log
    const handleDownloadLog = async (day)=>{
        if (!currentTripId) return;
        setDownloadingDay(day);
        try {
            await downloadLogMutation.mutateAsync({
                tripId: currentTripId,
                day
            });
            toast({
                title: "Download Started",
                description: `Downloading log for day ${day}...`
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to download log",
                variant: "destructive"
            });
        } finally{
            setDownloadingDay(null);
        }
    };
    // Handle downloading the map
    const handleDownloadMap = async ()=>{
        if (!currentTripId) return;
        try {
            const result = await downloadMapMutation.mutateAsync({
                tripId: currentTripId
            });
            if (result.success) {
                toast({
                    title: "Download Started",
                    description: "Downloading route map..."
                });
            } else {
                toast({
                    title: "Map Not Ready",
                    description: result.message || "The map is still being generated.",
                    variant: "destructive"
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to download map",
                variant: "destructive"
            });
        }
    };
    // Handle retrying map generation
    const handleRetryMap = async ()=>{
        if (!currentTripId) return;
        try {
            await retryMapMutation.mutateAsync(currentTripId);
            toast({
                title: "Map Regeneration",
                description: "The map is being regenerated. Please wait..."
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to retry map",
                variant: "destructive"
            });
        }
    };
    // Computed states - fixed to properly detect completion
    const isProcessing = __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        // Currently submitting the form
        if (calculateMutation.isPending) return true;
        // Trip is explicitly completed
        if (currentTrip?.status === "completed") return false;
        // Progress indicates completion
        if (progress.isCompleted && progress.isMapReady) return false;
        // Trip is processing
        if (currentTrip?.status === "processing") return true;
        // WebSocket says processing (and not completed)
        if (progress.isConnected && progress.status === "processing" && !progress.isCompleted) {
            return true;
        }
        return false;
    }, [
        calculateMutation.isPending,
        currentTrip?.status,
        progress.isCompleted,
        progress.isMapReady,
        progress.isConnected,
        progress.status
    ]);
    const isApiLoading = isLoadingTrips || isLoadingTrip || calculateMutation.isPending;
    // Get the best available map data (prefer real-time progress over cached trip data)
    const mapUrl = progress.mapUrl || currentTrip?.map_url || null;
    const mapStatus = progress.mapStatus || currentTrip?.map_status || null;
    const mapProgress = progress.mapProgress || currentTrip?.map_progress || 0;
    const isMapReady = progress.isMapReady || currentTrip?.is_map_ready || false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-card border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                        className: "text-primary h-8 w-8"
                                    }, void 0, false, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold",
                                                children: "Trip Dashboard"
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-sm",
                                                children: "Plan routes and generate ELD logs"
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: isProcessing ? "default" : "secondary",
                                children: isProcessing ? "Processing..." : "Ready"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Plan New Trip"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "Enter your trip details to calculate the optimal route and generate HOS logs"
                                                }, void 0, false, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$trip$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TripForm"], {
                                                onSubmit: handleCalculate,
                                                isLoading: calculateMutation.isPending || isProcessing
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Recent Trips"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "Click to load a previous trip"
                                                }, void 0, false, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                                className: "h-62.5",
                                                children: isLoadingTrips ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center justify-center py-8 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground mt-2 text-sm",
                                                            children: "Loading trips..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 21
                                                }, this) : recentTrips.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center justify-center py-8 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                            className: "text-muted-foreground/50 mb-2 h-12 w-12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-sm",
                                                            children: "No recent trips found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-xs",
                                                            children: "Create your first trip above"
                                                        }, void 0, false, {
                                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: recentTrips.map((trip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: currentTripId === trip.id ? "secondary" : "ghost",
                                                            className: "h-auto w-full justify-start px-3 py-3 text-left",
                                                            onClick: ()=>handleLoadTrip(trip.id),
                                                            disabled: isApiLoading,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex w-full flex-col gap-1 overflow-hidden",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate text-sm font-medium",
                                                                                children: [
                                                                                    "Trip #",
                                                                                    trip.id
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                                                lineNumber: 334,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: trip.status === "completed" ? "default" : trip.status === "failed" ? "destructive" : "secondary",
                                                                                className: "text-xs",
                                                                                children: trip.status
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                                                lineNumber: 337,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground truncate text-xs",
                                                                        children: trip.pickup_location
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                                        lineNumber: 350,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground truncate text-xs",
                                                                        children: [
                                                                            "→ ",
                                                                            trip.dropoff_location
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                                        lineNumber: 353,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    trip.total_distance && trip.total_driving_time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground text-xs",
                                                                        children: [
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"])(trip.total_distance),
                                                                            " •",
                                                                            " ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(trip.total_driving_time),
                                                                            " •",
                                                                            " ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTripDays"])(trip)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                                        lineNumber: 357,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, trip.id, false, {
                                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 lg:col-span-2",
                            children: [
                                isProcessing && progress.isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$trip$2d$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TripProgress"], {
                                    progress: progress
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "Route Map"
                                                }, void 0, false, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 17
                                                }, this),
                                                currentTrip && currentTrip.total_distance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"])(currentTrip.total_distance),
                                                        currentTrip.total_driving_time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                " • ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDuration"])(currentTrip.total_driving_time)
                                                            ]
                                                        }, void 0, true),
                                                        currentTrip.status === "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                " • ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTripDays"])(currentTrip)
                                                            ]
                                                        }, void 0, true)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$trip$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TripMap"], {
                                                tripId: currentTripId,
                                                mapUrl: mapUrl,
                                                mapStatus: mapStatus,
                                                mapProgress: mapProgress,
                                                isMapReady: isMapReady,
                                                isLoading: isProcessing && !progress.isConnected,
                                                onDownload: handleDownloadMap,
                                                onRetry: handleRetryMap,
                                                isDownloading: downloadMapMutation.isPending
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                currentTrip?.status === "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "ELD Logs"
                                                }, void 0, false, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: [
                                                        "Daily Hours of Service logs for your trip",
                                                        logs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                " ",
                                                                "(",
                                                                logs.length,
                                                                " ",
                                                                logs.length === 1 ? "day" : "days",
                                                                ")"
                                                            ]
                                                        }, void 0, true)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                            lineNumber: 414,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$trip$2d$logs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TripLogs"], {
                                                tripId: currentTripId,
                                                logs: logs,
                                                isLoading: isLoadingLogs,
                                                onDownload: handleDownloadLog,
                                                downloadingDay: downloadingDay
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                            lineNumber: 426,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, this),
                                !currentTrip && !isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "flex flex-col items-center justify-center py-16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                className: "text-muted-foreground/30 mb-4 h-16 w-16"
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 442,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-muted-foreground text-lg font-medium",
                                                children: "No Trip Selected"
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 443,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground mt-1 max-w-sm text-center text-sm",
                                                children: "Create a new trip using the form or select a recent trip to view the route and logs."
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                        lineNumber: 441,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this),
                                currentTripId && isLoadingTrip && !isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "flex flex-col items-center justify-center py-16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-primary mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 458,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-muted-foreground text-lg font-medium",
                                                children: "Loading Trip Details"
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 459,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground mt-1 max-w-sm text-center text-sm",
                                                children: "Please wait while we fetch the trip information..."
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 462,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                        lineNumber: 457,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this),
                                currentTrip?.status === "failed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-destructive/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "flex flex-col items-center justify-center py-16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-destructive/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                    className: "text-destructive h-8 w-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 473,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-destructive text-lg font-medium",
                                                children: "Trip Calculation Failed"
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 476,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground mt-1 max-w-sm text-center text-sm",
                                                children: currentTrip.error_message || "An error occurred while calculating the route. Please try again."
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 479,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: "mt-4",
                                                onClick: ()=>setCurrentTripId(null),
                                                children: "Start New Trip"
                                            }, void 0, false, {
                                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                                lineNumber: 483,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                        lineNumber: 472,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-card mt-auto border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground flex items-center justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "ELD Logs Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                lineNumber: 501,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$eld$2d$logs$2d$spotter$2f$eld_logs_frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "FMCSA HOS Compliant"
                            }, void 0, false, {
                                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                                lineNumber: 502,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                        lineNumber: 500,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                    lineNumber: 499,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
                lineNumber: 498,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/eld-logs-spotter/eld_logs_frontend/components/trip-dashboard.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=eld-logs-spotter_eld_logs_frontend_20c80174._.js.map