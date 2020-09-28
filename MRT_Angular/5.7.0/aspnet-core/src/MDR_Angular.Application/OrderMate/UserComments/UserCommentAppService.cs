using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.UserComments
{
    [AbpAuthorize(PermissionNames.Pages_UC)]
    public class UserCommentAppService : AsyncCrudAppService<
        UserComment, UserCommentDto, int, PagedAndSortedResultRequestDto, UserCommentDto>, IUserCommentAppService
    {
        public UserCommentAppService(IRepository<UserComment> repository) : base(repository) { }
    }
}
