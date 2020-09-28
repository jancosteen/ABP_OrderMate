using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.Menus
{
    [AbpAuthorize(PermissionNames.Pages_M)]
    public class MenuAppService : AsyncCrudAppService<
        Menu, MenuDto, int, PagedAndSortedResultRequestDto, MenuDto>, IMenuAppService
    {
        public MenuAppService(IRepository<Menu> repository) : base(repository) { }
    }
}
