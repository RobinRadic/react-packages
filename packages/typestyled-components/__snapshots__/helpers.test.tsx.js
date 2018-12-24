exports['base css selector function'] = `
cssSelector
`

exports['base css selector function_cssSelector'] = {
  "$nest": {
    "html > body": {
      "background": "none",
      "borderColor": "aqua",
      "$nest": {
        ".title": {
          "color": "#333"
        },
        "&:hover": {
          "textDecoration": "underline"
        }
      },
      "fontSize": 15
    }
  }
}

exports['other css selector function_active'] = {
  "$nest": {
    "&:active": {
      "background": "none",
      "borderColor": "aqua",
      "$nest": {
        ".title": {
          "color": "#333"
        },
        "&:hover": {
          "textDecoration": "underline"
        }
      },
      "fontSize": 15
    }
  }
}

exports['other css selector function_child'] = {
  "$nest": {
    "&>*": {
      "background": "none",
      "borderColor": "aqua",
      "$nest": {
        ".title": {
          "color": "#333"
        },
        "&:hover": {
          "textDecoration": "underline"
        }
      },
      "fontSize": 15
    }
  }
}

exports['other css selector function_firstChild'] = {
  "$nest": {
    "&>*:first-child": {
      "background": "none",
      "borderColor": "aqua",
      "$nest": {
        ".title": {
          "color": "#333"
        },
        "&:hover": {
          "textDecoration": "underline"
        }
      },
      "fontSize": 15
    }
  }
}

exports['other css selector function_hover'] = {
  "$nest": {
    "&:hover": {
      "background": "none",
      "borderColor": "aqua",
      "$nest": {
        ".title": {
          "color": "#333"
        },
        "&:hover": {
          "textDecoration": "underline"
        }
      },
      "fontSize": 15
    }
  }
}

exports['other css selector function_lastChild'] = {
  "$nest": {
    "&>*:last-child": {
      "background": "none",
      "borderColor": "aqua",
      "$nest": {
        ".title": {
          "color": "#333"
        },
        "&:hover": {
          "textDecoration": "underline"
        }
      },
      "fontSize": 15
    }
  }
}

exports['other css selector function_visited'] = {
  "$nest": {
    "&:visited": {
      "background": "none",
      "borderColor": "aqua",
      "$nest": {
        ".title": {
          "color": "#333"
        },
        "&:hover": {
          "textDecoration": "underline"
        }
      },
      "fontSize": 15
    }
  }
}
