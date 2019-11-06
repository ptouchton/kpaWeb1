import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const accounts = [
      {
        id: 1,
        EmailAddress: 'mwhite@student.hathaway.edu',
        FirstName: 'Maya',
        LastName: 'White'
      },
      {
        id: 2,
        EmailAddress: 'bmwangi@hathaway.edu',
        FirstName: 'Benjamin',
        LastName: 'Mwangi'
      },
      {
        id: 3,
        EmailAddress: 'enemec@hathaway.edu',
        FirstName: 'Elizabeth',
        LastName: 'Nemec'
      },
      {
        id: 4,
        EmailAddress: 'eruiz@hathaway.edu',
        FirstName: 'Edward',
        LastName: 'Ruiz, Jr.'
      }
    ];
    return {accounts};
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/