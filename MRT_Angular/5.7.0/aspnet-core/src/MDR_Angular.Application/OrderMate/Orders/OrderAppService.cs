using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using MDR_Angular.OrderMate.Orders.Dto;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace MDR_Angular.OrderMate.Orders
{
    [AbpAuthorize(PermissionNames.Pages_O)]
    public class OrderAppService : AsyncCrudAppService<
        Order, OrderDto, int, PagedAndSortedResultRequestDto, OrderDto>, IOrderAppService
    {
        public OrderAppService(IRepository<Order> repository) : base(repository) { }

        protected override IQueryable<Order> CreateFilteredQuery(PagedAndSortedResultRequestDto input)
        {
            return base.CreateFilteredQuery(input)
                .Include(i => i.OrderLine).ThenInclude(x => x.MenuItemIdFkNavigation)
                .Include(i => i.OrderStatusIdFkNavigation)
                .Include(i => i.QrCodeSeatingIdFk);
    }
    }

    
}
