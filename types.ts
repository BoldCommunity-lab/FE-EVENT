export interface EventType {
  name: string;
  date: string;
  description: string;
  image: string;
  tiktokUrl: string;
}

export interface TeamMemberType {
  position: string;
  name: string;
  discordId?: string;
  discordUrl?: string;
}
