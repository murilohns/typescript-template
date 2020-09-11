type ErrorProperties = {
  message: string;
  parameter: string;
  statusCode: number;
  type: string;
};

class APIBaseError extends Error {
  type: string;

  statusCode: number;

  parameter: string;

  constructor(props: ErrorProperties) {
    super(props.message);

    this.type = props.type;
    this.statusCode = props.statusCode;
    this.parameter = props.parameter;
  }

  toResponse() {
    return {
      errors: [
        {
          type: this.type,
          statusCode: this.statusCode,
          parameter: this.parameter,
        },
      ],
    };
  }
}

export default APIBaseError;
