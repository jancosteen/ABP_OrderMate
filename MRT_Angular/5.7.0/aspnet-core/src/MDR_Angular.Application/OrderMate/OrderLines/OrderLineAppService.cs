using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using MDR_Angular.OrderMate.OrderLines.Dto;

namespace MDR_Angular.OrderMate.OrderLines
{
    [AbpAuthorize(PermissionNames.Pages_OL)]
    public class OrderLineAppService : AsyncCrudAppService<
        OrderLine, OrderLineDto, int, PagedAndSortedResultRequestDto, OrderLineDto>, IOrderLineAppService
    {
        public OrderLineAppService(IRepository<OrderLine> repository) : base(repository) { }
    }
}
