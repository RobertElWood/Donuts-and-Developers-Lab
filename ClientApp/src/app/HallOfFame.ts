export interface HallOfFame {
    complete: HallOfFamer[];
    tiny:     HOFBasic[];
}

export interface HallOfFamer {
    firstName:  string;
    lastName:   string;
    innovation: string;
    year:       number;
}

export interface  HOFBasic {
    name:     string;
    invented: string;
    year:     number;
}
