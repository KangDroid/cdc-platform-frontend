#!/bin/bash

OPENAPI_SPECIFICATION='openapi.yaml'
OPENAPI_GENERATOR_CONFIGURATION='openapi-configuration.json'
OPENAPI_GENERATOR_PACKAGE_OUTPUT='./api'

# Bunch of validations
if [ ! -f $OPENAPI_SPECIFICATION ]; then
  echo "Cannot find OpenAPI Specification: $OPENAPI_SPECIFICATION"
  exit 1
fi

if [ ! -f $OPENAPI_GENERATOR_CONFIGURATION ]; then
  echo "Cannot find OpenAPI Configuration: $OPENAPI_GENERATOR_CONFIGURATION"
  exit 1
fi

# Cleanup First
if [ -d $OPENAPI_GENERATOR_PACKAGE_OUTPUT ]; then
  rm -rf $OPENAPI_GENERATOR_PACKAGE_OUTPUT
fi

# Generate
npx @openapitools/openapi-generator-cli generate \
  -i $OPENAPI_SPECIFICATION \
  -g typescript-axios \
  -o $OPENAPI_GENERATOR_PACKAGE_OUTPUT \
  -c $OPENAPI_GENERATOR_CONFIGURATION