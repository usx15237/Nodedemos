class Subscription
{
    constructor(userId,url)
    {
        this.userId=userId;
        this.url=url;
    }
    static list()
    {
        return Subscription.subscriptions;
    }
    static insert(sub)
    {
        Subscription.Subscriptions.push(sub)
        return sub
    }
    static getOneByUserId(userId)
    {
        return Subscription.Subscriptions.find(u=>u.userId===userId)
    }
    
}
Subscription.subscriptions=[]

module.exports=Subscription