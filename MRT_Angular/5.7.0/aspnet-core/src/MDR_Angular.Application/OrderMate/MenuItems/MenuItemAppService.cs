using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using MDR_Angular.OrderMate.MenuItems.Dto;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace MDR_Angular.OrderMate.MenuItems
{
    [AbpAuthorize(PermissionNames.Pages_MI)]
    public class MenuItemAppService : AsyncCrudAppService<
        MenuItem, MenuItemDto, int, PagedAndSortedResultRequestDto, MenuItemDto>, IMenuItemAppService
    {
        public MenuItemAppService(IRepository<MenuItem> repository) : base(repository) { }

        protected override IQueryable<MenuItem> CreateFilteredQuery(PagedAndSortedResultRequestDto input)
        {
            return base.CreateFilteredQuery(input)
                .Include(i => i.MenuItemAllergy)     
                .Include(i => i.MenuItemCategoryIdFkNavigation)
                .Include(i => i.MenuItemPriceIdFkNavigation)
                .Include(i => i.MenuRestaurant).ThenInclude(x => x.MenuIdFkNavigation)
                .Include(i => i.MenuItemSpecial).ThenInclude(x => x.SpecialIdFkNavigation)
                .Include(i => i.ItemTypeMenuMenuItem).ThenInclude(x => x.MenuItemTypeIdFkNavigation)
                .Include(i => i.MenuItemAllergy).ThenInclude(x=> x.AllergyIdFkNavigation)
                .Include(i => i.MenuItemSpecial).ThenInclude(x => x.SpecialIdFkNavigation);
        }

    }
}
