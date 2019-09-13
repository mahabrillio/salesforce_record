// Copyright 2017 Quip

export class DefaultError extends Error {
    constructor(message = "Default Error") {
        super(message);
        Object.setPrototypeOf(this, DefaultError.prototype);
        this.message_ = message;
    }

    getMessage() {
        return this.message_;
    }

    setMessage(message) {
        this.message_ = message;
    }

    getName() {
        return this.name;
    }
}

export class TypeNotSupportedError extends DefaultError {
    constructor(message = "Type Not Supported") {
        super(message);
        Object.setPrototypeOf(this, TypeNotSupportedError.prototype);
    }
}

export class InvalidValueError extends DefaultError {
    constructor(message = "Invalid Value") {
        super(message);
        Object.setPrototypeOf(this, InvalidValueError.prototype);
    }
}

export class FieldsCannotBeUpdatedError extends DefaultError {
    constructor(message = "Fields Cannot Be Updated") {
        super(message);
        Object.setPrototypeOf(this, FieldsCannotBeUpdatedError.prototype);
    }
}

export class TimeoutError extends DefaultError {
    constructor(message = "Timeout Error") {
        super(message);
        Object.setPrototypeOf(this, TimeoutError.prototype);
    }
}

export class UnauthenticatedError extends DefaultError {
    constructor(message = "Unauthenticated Error") {
        super(message);
        Object.setPrototypeOf(this, UnauthenticatedError.prototype);
    }
}

// HTTP error with status code
export class HttpError extends DefaultError {
    constructor(message = "Http Error") {
        super(message);
        Object.setPrototypeOf(this, HttpError.prototype);
        this.code_ = null;
    }

    getCode() {
        return this.code_;
    }
}

export class BadRequestError extends HttpError {
    constructor(message = "Bad Request Error") {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
        this.code_ = 400;
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message = "Unauthorized Error") {
        super(message);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
        this.code_ = 401;
    }
}

export class ForbiddenError extends HttpError {
    constructor(message = "Forbidden Error") {
        super(message);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
        this.code_ = 403;
    }
}

export class NotFoundError extends HttpError {
    constructor(message = "NotFound Error") {
        super(message);
        Object.setPrototypeOf(this, NotFoundError.prototype);
        this.code_ = 404;
    }
}

export class InternalServerError extends HttpError {
    constructor(message = "Internal Server Error") {
        super(message);
        Object.setPrototypeOf(this, InternalServerError.prototype);
        this.code_ = 500;
    }
}

export class ServiceUnavailableError extends HttpError {
    constructor(message = "Service Unavailable Error") {
        super(message);
        Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
        this.code_ = 503;
    }
}

export class GatewayTimeoutError extends HttpError {
    constructor(message = "Gateway Timeout Error") {
        super(message);
        Object.setPrototypeOf(this, GatewayTimeoutError.prototype);
        this.code_ = 504;
    }
}

export function getErrorMessage(maybeError) {
    if (typeof maybeError === "string") {
        return maybeError;
    }
    if (typeof maybeError.message === "string") {
        return maybeError.message;
    }

    return JSON.toString(maybeError);
}
