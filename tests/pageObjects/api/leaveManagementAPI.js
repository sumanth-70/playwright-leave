export default class leaveManagementApiPage{
    constructor(request) {
        this.request=request;
        this.baseUrl='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2';
        this.myLeaves='/leave/leave-requests';
    }

    async getMyLeaves(){
        const response=await this.request.get(this.baseUrl + this.myLeaves);
        return response;
    }
}