export interface RespuestaToHeadLines {
    count: number;
    results: Article[];    
}

export interface Article {
    origin: Origin;
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    type: string;
    image: string;
}

export interface Origin {
    name: string;  
    url: string;
} 