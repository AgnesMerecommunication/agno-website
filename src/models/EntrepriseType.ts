

export interface EntrepriseType{
    employerNumber? : number,
    firstName: string;
    email: string;
    phone: string
    businessName: string
    password: string;
    subscriptionType: string
    underSubscriptionType: string
    accountType: string;
    stripeCustomerId: string
    stripeValidatedSubscriptionId: string
    stripeLastSetupIntentId: string
    stripeValidatedSetupIntentId: string
}