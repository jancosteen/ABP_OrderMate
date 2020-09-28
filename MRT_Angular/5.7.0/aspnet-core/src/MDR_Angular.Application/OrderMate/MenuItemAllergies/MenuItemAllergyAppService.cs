using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using MDR_Angular.OrderMate.MenuItemAllergies.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemAllergies
{
    [AbpAuthorize(PermissionNames.Pages_MIA)]
    public class MenuItemAllergyAppService : AsyncCrudAppService<
        MenuItemAllergy, MenuItemAllergyDto, int, PagedAndSortedResultRequestDto, MenuItemAllergyDto>, IMenuItemAllergyAppService
    {
        public MenuItemAllergyAppService(IRepository<MenuItemAllergy> repository) : base(repository) { }
    }
}
