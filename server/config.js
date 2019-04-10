/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development 
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

'use strict'; // http://www.w3schools.com/js/js_strict.asp

module.exports = {

  // Autodesk Forge configuration

  // this this callback URL when creating your client ID and secret
  callbackURL: process.env.FORGE_CALLBACK_URL || 'https://bim360toxls.herokuapp.com/api/forge/callback/oauth',

  // set enviroment variables or hard-code here
  credentials: {
    client_id: process.env.FORGE_CLIENT_ID || 'An0wOPK7C5eLKkj0ibVbTXGTX8G8vSBu',
    client_secret: process.env.FORGE_CLIENT_SECRET || 'eDP7snz04XEdPswf',
  },

  // Required scopes for your application on server-side
  scopeInternal: ['data:read'],
  // Required scope of the token sent to the client
  scopePublic: ['viewables:read'],
};