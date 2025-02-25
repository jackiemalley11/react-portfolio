export interface ProjectData{
    projects: Project[];
}

export interface Project {
    _id:         string;
    name:        string;
    description: string;
    tech:        [];
    loomVideoUrl: string;
}

export interface Experience {
    _id:         string;
    front:        string;
    back: [];

}


