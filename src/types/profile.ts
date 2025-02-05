export interface IProfile {
    avatar_url: string;
    name: string;
    email: string;
}

export interface ProfileState {
    userProfile: IProfile | null;
    setUserProfile: (countries: IProfile) => void;
    resetUserProfile: () => void;
}