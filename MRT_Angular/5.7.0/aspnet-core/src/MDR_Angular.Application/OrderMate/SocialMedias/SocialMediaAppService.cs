using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;

namespace MDR_Angular.OrderMate.SocialMedias
{
    [AbpAuthorize(PermissionNames.Pages_SM)]
    public class SocialMediaAppService : AsyncCrudAppService<
        SocialMedia, SocialMediaDto, int, PagedAndSortedResultRequestDto, SocialMediaDto>, ISocialMediaAppService
    {
        public SocialMediaAppService(IRepository<SocialMedia> repository) : base(repository) { }
    }
}
