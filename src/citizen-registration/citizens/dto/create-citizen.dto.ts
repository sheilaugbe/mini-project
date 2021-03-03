import { CreateUserDto } from "src/citizen-registration/users/dto/create-user.dto";
import { ModeOfEntry } from "../../../citizen-registration/citizenRegistration.types";

export class CreateCitizenDto {
    readonly department: string;
    readonly matriculationNumber: string;
    readonly modeOfEntry: ModeOfEntry;
    readonly programOfStudy: string;
    readonly yearOfEntry: number;
    readonly user: CreateUserDto; //In case you want to create a user along with student
    }
