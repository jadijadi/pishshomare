import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "Vazir, Tahoma, \"Open Sans\", Helvetica, Arial, sans-serif"
    },
    "bodycustom-font-enabled": {
        "fontFamily": "Vazir, Tahoma, \"Open Sans\", Helvetica, Arial, sans-serif"
    },
    "body h1": {
        "fontFamily": "Vazir, Tahoma, \"Open Sans\", Helvetica, Arial, sans-serif",
        "fontWeight": "bold"
    },
    "h2": {
        "fontFamily": "Vazir, Tahoma, \"Open Sans\", Helvetica, Arial, sans-serif",
        "fontWeight": "bold"
    },
    "h3": {
        "fontFamily": "Vazir, Tahoma, \"Open Sans\", Helvetica, Arial, sans-serif",
        "fontWeight": "bold"
    },
    "h4": {
        "fontFamily": "Vazir, Tahoma, \"Open Sans\", Helvetica, Arial, sans-serif",
        "fontWeight": "bold"
    },
    "h5": {
        "fontFamily": "Vazir, Tahoma, \"Open Sans\", Helvetica, Arial, sans-serif",
        "fontWeight": "bold"
    },
    "h6": {
        "fontFamily": "Vazir, Tahoma, \"Open Sans\", Helvetica, Arial, sans-serif",
        "fontWeight": "bold"
    },
    "h1": {
        "fontFamily": "Vazir, Tahoma, \"Open Sans\", Helvetica, Arial, sans-serif",
        "fontWeight": "bold"
    },
    "navbarnavbar-inverse": {
        "fontFamily": "Vazir, Tahoma, \"Open Sans\", Helvetica, Arial, sans-serif",
        "fontWeight": "bold"
    }
});