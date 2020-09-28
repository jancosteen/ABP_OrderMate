using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using MDR_Angular.OrderMate.MenuItemCategories.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemCategories
{
    [AbpAuthorize(PermissionNames.Pages_MIC)]
    public class MenuItemCategoryAppService : AsyncCrudAppService<
        MenuItemCategory, MenuItemCategoryDto, int, PagedAndSortedResultRequestDto, MenuItemCategoryDto>, IMenuItemCategoryAppService
    {
        public MenuItemCategoryAppService(IRepository<MenuItemCategory> repository) : base(repository) { }
    }
}
