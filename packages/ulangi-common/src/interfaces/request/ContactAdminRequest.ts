/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { Request } from './Request';

export interface ContactAdminRequest extends Request {
  readonly path: '/contact-admin';
  readonly method: 'post';
  readonly authRequired: false;
  readonly query: null;
  readonly body: {
    readonly adminEmail: string;
    readonly replyToEmail: string;
    readonly subject: string;
    readonly message: string;
  };
}