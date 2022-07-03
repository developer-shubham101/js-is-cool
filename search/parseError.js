let error = {
    "errors": [
        {
            "message": "Argument Validation Error",
            "locations": [
                {
                    "line": 2,
                    "column": 3
                }
            ],
            "path": ["addRecipe"],
            "extensions": {
                "code": "INTERNAL_SERVER_ERROR",
                "exception": {
                    "validationErrors": [
                        {
                            "target": {
                                "title": "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet"
                            },
                            "value": "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
                            "property": "title",
                            "children": [],
                            "constraints": {
                                "maxLength": "title must be shorter than or equal to 30 characters"
                            }
                        }
                    ],
                    "stacktrace": [
                        "Error: Argument Validation Error",
                        "    at Object.<anonymous> (F:\\#Projekty\\type-graphql\\src\\resolvers\\validate-arg.ts:29:11)",
                        "    at Generator.throw (<anonymous>)",
                        "    at rejected (F:\\#Projekty\\type-graphql\\node_modules\\tslib\\tslib.js:105:69)",
                        "    at processTicksAndRejections (internal/process/next_tick.js:81:5)"
                    ]
                }
            }
        }
    ],
    "data": null
};

console.log(error.errors[0].extensions.exception.validationErrors[0].property);