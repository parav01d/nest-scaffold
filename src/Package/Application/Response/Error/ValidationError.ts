import { ApiProperty } from '@nestjs/swagger';
import { HTTP_STATUS_CODE } from 'Package/Application/Controller/StatusCode';

export class ValidationError {
  @ApiProperty({
    type: () => Number,
    default: HTTP_STATUS_CODE.BAD_REQUEST,
  })
  private status = HTTP_STATUS_CODE.BAD_REQUEST;
  @ApiProperty()
  error: any;
  constructor(error: object) {
    this.error = error;
  }
  getStatus() {
    return this.status;
  }
  getError() {
    return this.error;
  }
}
