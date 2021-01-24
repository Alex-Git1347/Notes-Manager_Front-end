export class Note {
  constructor(
    public Description: string,
    public NoteText: string,
    public Id?: number,
  ) {}
}

export interface Notes {
  notes: Note[]
}
