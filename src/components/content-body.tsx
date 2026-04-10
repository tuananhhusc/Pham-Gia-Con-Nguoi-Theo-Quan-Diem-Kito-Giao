"use client";

import Image from "next/image";
import ChapterSection from "@/components/chapter-section";
import ChapterDivider from "@/components/chapter-divider";
import ComparisonTable from "@/components/comparison-table";
import PullQuote from "@/components/pull-quote";
import CitationList from "@/components/citation-list";
import ScholarlyText from "@/components/scholarly-text";

export const baTruyenThongRows = [
  {
    criteria: "Cơ sở Hữu thể học (Ontological Basis)",
    cells: [
      "Imago Dei là món quà nội tại, bản tính con người mang tính 'tốt lành' căn bản nhưng bị tổn thương bởi tội lỗi. Linh hồn phản chiếu Thiên Chúa qua trí nhớ, sự hiểu biết và ý chí.",
      "Phân biệt giữa 'hình ảnh' (hình hài hữu thể) và 'giống như' (sự trọn lành tâm linh). Con người là hữu thể tương quan, được kêu gọi hiệp thông vượt qua giới hạn tự nhiên.",
      "Tội lỗi nguyên thủy gây ra sự sa ngã toàn diện (Total Depravity). Hình ảnh Thiên Chúa bị hư hỏng về mặt đạo đức, con người hoàn toàn phụ thuộc vào sự công chính hóa từ bên ngoài."
    ].map(c => <ScholarlyText key={c}>{c}</ScholarlyText>)
  },
  {
    criteria: "Bản chất của Ơn cứu độ (Soteriology)",
    cells: [
      "Sự hợp tác (synergism) giữa ân sủng và tự do. Đức tin sinh hoa trái qua đức ái (fides caritate formata). Thánh hóa là một quá trình biến đổi liên tục.6",
      "Tiến trình Theosis (Thần hóa). Không có sự tách biệt pháp lý giữa công chính hóa và thánh hóa. Ân sủng là năng lực thần linh (Uncreated Energies) thấu nhập vào thụ tạo.6",
      "Sola Fide (Chỉ bởi Đức tin). Sự công chính hóa mang tính pháp lý (forensic), nơi sự công chính của Đức Kitô được gán cho tội nhân. Nhấn mạnh sự tể trị tuyệt đối của Thiên Chúa.6"
    ].map(c => <ScholarlyText key={c}>{c}</ScholarlyText>)
  },
  {
    criteria: "Vai trò Ý chí và Tự do",
    cells: [
      "Ý chí tự do được chữa lành bởi ân sủng để có thể chọn lựa điều thiện. Sự tự do là điều kiện tiên quyết cho trách nhiệm đạo đức và phẩm giá.",
      "Tự do là nền tảng của nhân vị (personhood). Con người không chỉ là thụ tạo mà còn là 'đồng sáng tạo' với Thiên Chúa trong tiến trình thần hóa bản thân.",
      "Ý chí tự nhiên bị nô lệ bởi tội lỗi. Tự do đích thực chỉ có được khi được giải phóng bởi ân sủng. Tập trung vào sự tự do của lương tâm trước mọi định chế trần gian."
    ].map(c => <ScholarlyText key={c}>{c}</ScholarlyText>)
  },
  {
    criteria: "Khung Khái niệm Xã hội",
    cells: [
      "Nguyên tắc Tính bổ trợ (Subsidiarity) và Công ích. Giáo huấn Xã hội tập trung vào các cấu trúc trung gian và phẩm giá lao động.28",
      "Đạo đức xã hội là sự mở rộng của Phụng vụ. Tập trung vào sự hiệp thông (sobornost), hòa bình và thăng tiến cộng đồng (For the Life of the World).2",
      "Nguyên tắc Chủ quyền Từng vùng (Sphere Sovereignty). Đạo đức cá nhân, ơn gọi thế tục và sự đa nguyên của các định chế hội đoàn (Abraham Kuyper).33"
    ].map(c => <ScholarlyText key={c}>{c}</ScholarlyText>)
  },
  {
    criteria: "Đích đến Tối hậu (Teleology)",
    cells: [
      "Sự thánh hóa và vinh phúc diện đối diện (Beatific Vision). Con người đạt tới sự trọn lành tối hậu trong sự hiện diện của Thiên Chúa.",
      "Sự hiệp thông vĩnh cửu với Ba Ngôi qua Theosis. Con người trở thành 'thần' nhờ ân sủng nhưng vẫn giữ nguyên bản chất thụ tạo.",
      "Sự vinh hiển của Thiên Chúa (Soli Deo Gloria). Sự phục hồi trật tự tạo dựng nơi con người phản chiếu sự công chính và thánh khiết của Đấng Tạo Hóa."
    ].map(c => <ScholarlyText key={c}>{c}</ScholarlyText>)
  }
];

export const tiepCanPhucVuRows = [
  {
    criteria: "Trọng tâm Hành động",
    cells: [
      "Ưu tiên các hoạt động từ thiện, cứu trợ trực tiếp, chăm sóc y tế và giáo dục như cách thức cốt lõi để thăng tiến người nghèo.",
      "Dành sự quan tâm lớn cho việc truyền bá Phúc Âm, tin rằng việc \"mang người nghèo đến với Đức Kitô\" là hình thức cứu trợ cao nhất."
    ]
  },
  {
    criteria: "Nền tảng Thần học",
    cells: [
      "Dựa trên nguyên lý Liên đới và các giáo huấn như Gaudium et Spes, coi mọi hành vi phục vụ nhân sinh là phục vụ chính Thiên Chúa và chống lại sự tha hóa văn minh.",
      "Dựa trên niềm tin về sự cần thiết của sự cứu rỗi cá nhân (Justification); sự thay đổi tâm linh sẽ dẫn đến sự biến đổi đời sống vật chất."
    ]
  },
  {
    criteria: "Mức độ Tham gia",
    cells: [
      "Tham gia rộng rãi vào các dự án xã hội có tính tổ chức, viện mồ côi, và các sáng kiến của Caritas và dòng tu.",
      "Báo cáo tỷ lệ cao về việc tham gia cá nhân hoặc qua hội thánh địa phương vào các quỹ từ thiện trực tiếp cho người cần giúp đỡ."
    ]
  }
];

export const thachThucRows = [
  {
    criteria: "Trí tuệ Nhân tạo (AI)",
    cells: [
      "Đề xuất 'Algor-ethics'. Nhấn mạnh AI không có chủ thể 'Tôi' và không thể thay thế nhân vị trong các quyết định luân lý đạo đức.",
      "Nhìn nhận AI qua lăng kính 'Thần hóa'. Máy móc thiếu vắng khả năng hiệp thông thiêng bảo và không mang Imago Dei.",
      "Cảnh giác với sự tha hóa quyền lực qua thuật toán. Đề cao trách nhiệm cá nhân và sự tự do của lương tâm trước công nghệ."
    ].map(c => <ScholarlyText key={c}>{c}</ScholarlyText>)
  },
  {
    criteria: "Đạo đức Sinh học",
    cells: [
      "Lên án mạnh mẽ mang thai hộ và IVF (Dignitas Infinita). Bảo vệ phẩm giá phôi thai và sự thánh thiêng của nhị nguyên giới.",
      "Phản đối mọi hình thức can thiệp làm biến dạng thân phận thụ tạo. Nhấn mạnh thể xác là đền thờ của Chúa Thánh Thần.",
      "Quan điểm đa chiều: Một số chấp nhận mang thai hộ phi thương mại. Luôn đặt sự sống và phẩm giá cá nhân lên hàng đầu."
    ].map(c => <ScholarlyText key={c}>{c}</ScholarlyText>)
  },
  {
    criteria: "Chiến tranh & Nghèo đói",
    cells: [
      "Thúc đẩy hòa bình qua công lý và tình liên đới. 'Lựa chọn ưu tiên cho người nghèo' là tiêu chuẩn đo lường tính chính đáng xã hội.",
      "Hòa bình là sự hiệp thông. Phản đối mọi cấu trúc áp bức chà đạp lên hình ảnh Thiên Chúa nơi tha nhân.",
      "Phong trào 'Tin Lành Xã hội'. Cải thiện điều kiện sống và chống bất công như cách kiến tạo Vương quốc Thiên Chúa."
    ].map(c => <ScholarlyText key={c}>{c}</ScholarlyText>)
  }
];

export default function ContentBody() {
  return (
    <article className="flex-1 max-w-[720px] mx-auto xl:mx-0 w-full animate-fade-in-up pb-20">
      <ChapterSection id="dan-nhap" number="1" title="Dẫn nhập và Bối cảnh Triết học của Phẩm giá Con người" isFirst>
        <p><ScholarlyText>Khái niệm về phẩm giá con người là một trong những thành tựu triết học và luân lý vĩ đại nhất của nền văn minh nhân loại. Trong bối cảnh hiện đại, phẩm giá thường được viện dẫn như nền tảng hiển nhiên cho hệ thống nhân quyền quốc tế, đặc biệt là thông qua Tuyên ngôn Quốc tế về Nhân quyền năm 1948 của Liên Hợp Quốc.1 Tuy nhiên, đằng sau sự đồng thuận mang tính thế tục và pháp lý này là một lịch sử phát triển thần học sâu sắc đã được bồi đắp qua hàng thiên niên kỷ. Trong nhãn quan Kitô giáo, phẩm giá con người không bao giờ là một sự nhượng bộ của nhà nước, một khế ước xã hội mang tính thực dụng, hay một đặc quyền dựa trên năng lực nhận thức hoặc đóng góp kinh tế của cá nhân. Thay vào đó, nó là một thực tại hữu thể học (ontological reality) bắt nguồn từ chính hành động sáng tạo và công cuộc cứu độ của Thiên Chúa.3</ScholarlyText></p>
        <p><ScholarlyText>Báo cáo nghiên cứu này tiến hành phân tích một cách toàn diện và kiệt xuất sự hiểu biết của Kitô giáo về phẩm giá con người. Sự phân tích này vượt ra khỏi giới hạn của việc diễn giải Kinh Thánh đơn thuần, mở rộng sang việc đánh giá sự giao thoa, tính đa dạng và những khác biệt tinh tế về mặt thần học giữa ba nhánh lớn của lịch sử giáo hội: Công giáo (Catholicism), Chính thống giáo (Orthodoxy), và Tin Lành (Protestantism).6 Hơn thế nữa, báo cáo cung cấp những phân tích phái sinh (second and third-order insights) về cách thức các nguyên tắc thần học siêu việt này ứng phó với những biến động và thách thức chưa từng có của thế kỷ 21. Những thách thức này trải dài từ sự trỗi dậy của Trí tuệ Nhân tạo (AI) và Chủ nghĩa Siêu nhân học (Transhumanism) vốn đang đe dọa định nghĩa lại bản tính người, đến các vấn đề phức tạp trong đạo đức sinh học như mang thai hộ, lý thuyết giới tính, cũng như các thảm họa về sinh thái và sự tàn khốc của chiến tranh.8 Cuối cùng, báo cáo sẽ đối chiếu các nguyên tắc phổ quát này với bối cảnh đặc thù tại Việt Nam, nơi các cộng đồng Kitô hữu đang nỗ lực hiện thực hóa niềm tin của mình trong một môi trường chính trị, văn hóa và xã hội đa nguyên, minh chứng cho sức sống của một nền thần học dấn thân.11</ScholarlyText></p>

        <PullQuote 
          quote="Phẩm giá không phải là một đặc quyền được ban phát, mà là một thực tại hữu thể học bắt nguồn từ chính hành động sáng tạo của Thiên Chúa."
          align="center"
        />

        <div className="my-10 overflow-hidden rounded-2xl border border-border/40 shadow-xl bg-muted/20">
          <Image 
            src="/imago_dei_diagram.png" 
            alt="Sơ đồ Thần học Imago Dei" 
            width={1200}
            height={800}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="p-4 text-center border-t border-border/10">
            <p className="text-xs italic text-muted-foreground font-serif">Sơ đồ khái niệm về ba chiều kích của Imago Dei: Bản thể (Lý trí), Chức năng (Quản trị), và Tương quan (Hiệp thông)</p>
          </div>
        </div>
      </ChapterSection>

      <ChapterDivider />

      <ChapterSection id="imago-dei" number="2" title="Nền tảng Hữu thể học Cốt lõi: Imago Dei và Căn tính Con người">
        <ChapterSection id="nguon-goc" number="2.1" title="Nguồn gốc Thần linh và Sự Phủ nhận Hệ bậc Xã hội" level={2}>
          <p><ScholarlyText>Hòn đá tảng không thể lay chuyển trong nhân học Kitô giáo là khái niệm Imago Dei (Hình ảnh Thiên Chúa). Khái niệm này được định hình ngay từ những trang đầu tiên của sách Sáng Thế (Genesis 1:26-27), trong đó khẳng định một cách dứt khoát rằng con người, cả nam lẫn nữ, được tạo dựng theo hình ảnh và giống như Đấng Tạo Hóa.4 Việc sử dụng thuật ngữ Imago Dei không đơn thuần là một ẩn dụ thi ca thời cổ đại, mà là một tuyên ngôn mang tính cách mạng về mặt triết học và chính trị. Nó tạo ra một sự phân ranh giới rõ ràng với nhiều hệ tư tưởng cổ đại vốn coi con người chỉ là nô lệ của các vị thần, cũng như đối nghịch với các hệ tư tưởng hiện đại coi con người như những cỗ máy sinh học hay công cụ của nhà nước.</ScholarlyText></p>
          <p><ScholarlyText>Một phân tích sâu sắc cho thấy phẩm giá của con người mang tính chất "dẫn xuất" (derivative) từ hành động của Thiên Chúa.3 Nghĩa là, giá trị của con người không phải là tự thân hữu (intrinsic) theo nghĩa hoàn toàn độc lập và tự thân sinh ra, mà nó phụ thuộc hoàn toàn vào nguồn gốc thần linh, sự sở hữu của Thiên Chúa đối với thụ tạo, và quyết định yêu thương, thánh hóa của Ngài.3 Chính vì nguồn gốc này, phẩm giá con người mang tính phổ quát, vô biên và bất khả xâm phạm. Điều này dẫn đến một hệ quả nhận thức quan trọng và triệt để: không một cá nhân, một nhà nước, một hệ thống luật pháp hay một ý thức hệ nào có quyền ban phát hay tước đoạt phẩm giá này.4</ScholarlyText></p>
          <p><ScholarlyText>Trong lịch sử tư tưởng triết học phương Tây, các tư tưởng gia lỗi lạc như Aristotle hay Immanuel Kant đã gắn liền phẩm giá và giá trị của con người với khả năng tư duy, năng lực lý trí tự trị, hoặc khả năng hành động theo các mệnh lệnh đạo đức.16 Tuy nhiên, nhân học Kitô giáo thách thức triệt để quan điểm phân tầng này. Nếu phẩm giá phụ thuộc vào trí tuệ hay năng lực thể chất, thì toàn bộ các cộng đồng những người mắc hội chứng suy giảm nhận thức, thai nhi chưa phát triển, người tàn tật nặng, hoặc người già sa sút trí tuệ sẽ bị loại khỏi vòng bảo vệ của nhân quyền cơ bản. Khái niệm Imago Dei vô hiệu hóa hoàn toàn sự phân tầng dựa trên năng lực này. Nó khẳng định rằng ngay cả khi một cá nhân mất đi mọi khả năng tư duy, ngôn ngữ hay sức mạnh thể chất, hình ảnh Thiên Chúa nơi họ vẫn nguyên vẹn, nội tại và vĩnh cửu.4 Do đó, Imago Dei không chỉ là một nguyên lý thần học trừu tượng, mà còn là bức tường thành vững chắc nhất chống lại các hệ tư tưởng loại trừ, chủ nghĩa thực dụng tàn nhẫn, và các xu hướng ưu sinh (eugenics) luôn chực chờ đe dọa nền văn minh nhân loại.</ScholarlyText></p>
          
          <PullQuote 
            quote="Imago Dei là bức tường thành vững chắc nhất chống lại sự phân tầng nhân phẩm dựa trên năng lực nhận thức hay thể chất."
            align="left"
          />
        </ChapterSection>
        
        <ChapterSection id="da-giac" number="2.2" title="Các Đa giác Diễn giải Lịch sử: Bản thể, Chức năng và Tương quan" level={2}>
          <p><ScholarlyText>Trong suốt chiều dài lịch sử thần học Kitô giáo, khái niệm Imago Dei không phải là một khối tinh thể tĩnh tại mà đã được kiến giải thông qua ba lăng kính triết học chính, mỗi lăng kính đóng góp một khía cạnh quan trọng vào việc hiểu rõ sự phức hợp của phẩm giá con người.10</ScholarlyText></p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-foreground/90">
            <li><strong>Góc nhìn Bản thể (Substantive):</strong> <ScholarlyText>Các nhà thần học vĩ đại thời kỳ Giáo phụ và Kinh viện như Philo, Augustine và Thomas Aquinas thường nhìn nhận Imago Dei qua năng lực nội tại của linh hồn, đặc biệt là lý trí và ý chí tự do.10 Thánh Augustine lập luận rằng tâm trí con người mang một cấu trúc phản chiếu chính Thiên Chúa Ba Ngôi (trí nhớ, sự hiểu biết, và ý chí), cho phếp con người khao khát và nhận thức Đấng Tạo Hóa.17 Mặc dù cách tiếp cận này đề cao trí tuệ con người như đỉnh cao của công trình sáng tạo vô tri vô giác, nỗ đôi khi vấp phải những giới hạn trong thời đại ngày nay khi phải đối diện với việc giải thích trọn vẹn phẩm giá của những cá nhân thiếu hụt năng lực nhận thức.16</ScholarlyText></li>
            <li><strong>Góc nhìn Chức năng (Functional):</strong> <ScholarlyText>Được hỗ trợ mạnh mẽ bởi bối cảnh ngôn ngữ học của Cựu Ước và vùng Cận Đông cổ đại, quan điểm này cho rằng hình ảnh Thiên Chúa không nằm ở một đặc tính vật lý hay siêu hình, mà ở vai trò "đại diện" và "quản lý" (stewardship) của con người đối với công trình sáng tạo.10 Trong các nền văn minh cổ, chỉ các vị vua mới được coi là hình ảnh của thần linh. Sáng Thế Ký đã dân chủ hóa khái niệm này, phong vương cho toàn thể nhân loại. Khía cạnh này mở rộng diễn ngôn về phẩm giá sang lĩnh vực thần học sinh thái học (ecological theology). Việc được tạo dựng theo hình ảnh Thiên Chúa không chỉ mang lại đặc quyền thống trị mà còn là một nghĩa vụ tập thể, một mệnh lệnh đạo đức trong việc bảo vệ Trái Đất, duy trì sự gắn kết của mọi dạng sống.13 Sự tàn phá môi trường vì lòng tham, do đó, không chỉ là một cuộc khủng khủng tự nhiên mà là một sự xúc phạm trực tiếp đến ơn gọi Imago Dei và là sự chối bỏ trách nhiệm làm người quản gia trung tín của Thiên Chúa.</ScholarlyText></li>
            <li><strong>Góc nhìn Tương quan (Relational):</strong> <ScholarlyText>Các nhà thần học hiện đại và đương đại như Karl Barth, và đặc biệt là các nhà thần học Chính thống giáo như John Zizioulas, định nghĩa Imago Dei chủ yếu thông qua khả năng thiết lập sự hiệp thông.10 Căn tính con người không phải là một thực thể cô lập, mà là một "hữu thể tương quan" (relational ontology) phản chiếu bản thể hiệp thông yêu thương của Thiên Chúa Ba Ngôi.10 Con người chỉ thực sự là người khi sống trong mối tương quan với Thiên Chúa, với tha nhân và với vạn vật. Từ góc nhìn này, sự cô lập xã hội, sự phân biệt đối xử, và sự đứt gãy các mối quan hệ cấu trúc chính là những sự tổn thương sâu sắc đối với phẩm giá. Quan điểm này đặc biệt quan trọng trong việc bảo vệ những người yếu thế, bởi giá trị của họ không phụ thuộc vào những gì họ "làm" được, mà nằm ở chỗ họ "thuộc về" cộng đồng nhân loại và thuộc về Thiên Chúa.</ScholarlyText></li>
          </ul>

          <PullQuote 
            quote="Con người là một hữu thể tương quan; nhân phẩm không tồn tại trong sự cô lập, mà trong sự hiệp thông hiệp nhất với Thiên Chúa và tha nhân."
            align="right"
          />
        </ChapterSection>
      </ChapterSection>

      <ChapterDivider />

      <ChapterSection id="nhap-the" number="3" title="Mầu Nhiệm Nhập Thể và Công Cuộc Cứu Độ: Sự Thăng Tiến Tối Hậu Của Phẩm Giá">
        <p><ScholarlyText>Nếu sách Sáng Thế đặt nền móng nguyên thủy cho phẩm giá con người thông qua việc tạo dựng, thì thần học Tân Ước đưa phẩm giá này lên một tầm vóc thiêng liêng chưa từng có thông qua mầu nhiệm Nhập thể (Incarnation) và ơn cứu độ của Đức Giêsu Kitô.19 Sự hiểu biết toàn diện về nhân phẩm đòi hỏi một cái nhìn mang tính mục đích luận (teleological), kết nối trọn vẹn giữa nguồn gốc (sự tạo dựng) và cùng đích (sự sống lại và sự sống đời đời trong Thiên Chúa).3</ScholarlyText></p>
        
        <ChapterSection id="su-nhap-the" number="3.1" title="Sự Nhập Thể: Lời Khẳng Định Lịch Sử Về Bản Tính Người" level={2}>
          <p><ScholarlyText>Việc Ngôi Lời Thiên Chúa trở nên người phàm không chỉ đơn thuần là một giải pháp kỹ thuật để chuộc tội, mà trước hết và trên hết là một minh chứng hữu hình và vĩnh cửu cho sự cao trọng, sự vĩ đại của bản tính con người. Khi Thiên Chúa tự nguyện đảm nhận lấy xác phàm con người, chia sẻ mọi giới hạn sinh học, lịch sử và cảm xúc (ngoại trừ tội lỗi), Ngài đã thánh hóa và tôn vinh toàn bộ thực tại nhân loại một cách dứt khoát.5 Việc Thiên Chúa chọn làm người chứng tỏ rằng cấu trúc của con người có một khả năng nội tại để dung chứa sự thần linh (capacity for the divine).</ScholarlyText></p>
          
          <PullQuote 
            quote="Đức Kitô mạc khải con người cho chính con người."
            author="Thánh Giáo hoàng Gioan Phaolô II"
            align="center"
          />

          <p><ScholarlyText>Về mặt triết học, cách tiếp cận hữu thần học này giúp Kitô giáo giải quyết thành công 'Song quan luận Euthyphro' (Euthyphro dilemma) vốn luôn làm đau đầu các nhà đạo đức học. Phẩm giá con người không phải là một mệnh lệnh đạo đức độc đoán từ bên ngoài mà Thiên Chúa áp đặt, cũng không phải là một tiêu chuẩn độc lập, tự hữu mà Thiên Chúa phải tuân theo. Đúng hơn, phẩm giá xuất phát từ chính bản tính thánh thiện của Thiên Chúa, được thông truyền và kết hiệp mật thiết với con người qua sự Nhập thể của Ngôi Hai.20</ScholarlyText></p>
          <p><ScholarlyText>Thông điệp Redemptor Hominis (Đâng Cứu Chuộc Con Người) của Đức Giáo Hoàng Gioan Phaolô II đã khai triển mầu nhiệm này một cách sâu sắc khi khẳng định một nguyên lý cốt lõi: "Đức Kitô mạc khải con người cho chính con người".5 Không có sự mạc khải và trải nghiệm về tình yêu cứu độ này, con người vẫn mãi là một ẩn số đau buồn đối với chính bản thân mình, và cuộc đời của họ sẽ trôi đi trong sự vô nghĩa.5 Thông qua mầu nhiệm cứu chuộc, con người không chỉ được sửa chữa khỏi những hư hỏng của tội lỗi mà còn được "tạo dựng mới", vượt qua mọi khác biệt giả tạo về chủng tộc, giai cấp hay giới tính trên trần gian. Họ được nhận lãnh quyền làm con Thiên Chúa, được kêu gọi dự phần vào sự sống thần linh, vượt qua giới hạn của sự chết để bước vào ánh sáng của sự phục sinh vinh hiển.5</ScholarlyText></p>
        </ChapterSection>

        <ChapterSection id="phuc-hoi" number="3.2" title="Sự Phục Hồi Hình Ảnh Bị Biến Dạng Trong Lịch Sử" level={2}>
          <p><ScholarlyText>Sự phản nghịch nguyên thủy và tội lỗi của nhân loại trong dòng chảy lịch sử đã làm "biến dạng", làm lu mờ và rạn nứt Imago Dei.17 Sự phá vỡ căn tính này là nguyên nhân cốt lõi dẫn đến những thảm kịch tâm lý, sự hỗn loạn trong trật tự xã hội, sự thù hận giữa các dân tộc, và sự sụp đổ của các nền văn minh.22 Tuy nhiên, cuộc thương khó, cái chết thập giá và sự phục sinh của Đức Kitô đã định hình lại và tái cấu trúc Imago Dei theo khuôn mẫu hoàn hảo của Imago Christi (Hình ảnh Đức Kitô).18</ScholarlyText></p>
          <p><ScholarlyText>Từ góc độ cứu độ học (soteriology) của các Giáo phụ, đây là một quá trình phục hồi và hoàn thiện sinh động.14 Thánh Irenaeus thành Lyon, một trong những nhà thần học vĩ đại nhất của thế kỷ thứ hai, đã tạo ra một sự phân biệt tinh tế nhưng mang tính quyết định giữa "hình ảnh" (image - eikōn) và "giống như" (likeness - homoiōsis). Theo lập luận của ngài, nhân loại sau sa ngã đã đánh mất đi sự "giống như" Thiên Chúa (tức là đánh mất sự thánh thiện, sự công chính và tình yêu trọn vẹn), nhưng bản chất "hình ảnh" (căn tính cốt lõi cấu thành nên một con người) thì không bao giờ bị phá hủy.14 Ơn cứu độ của Đức Kitô mang lại nguồn ân sủng mới, cung cấp khả năng cho con người lớn lên và phát triển tâm linh một lần nữa để đạt đến sự hoàn thiện đã mất, một sự thăng hoa thực sự của nhân phẩm từ tình trạng ấu trĩ thiêng liêng vươn tới sự trưởng thành viên mãn.14</ScholarlyText></p>
        </ChapterSection>
      </ChapterSection>

      <ChapterDivider />

      <ChapterSection id="da-dang" number="4" title="Sự Đa Dạng Thần Học: Phân Tích Quan Điểm Của Ba Truyền Thống Lớn" isFirst>
        <p><ScholarlyText>Mặc dù chia sẻ chung nền tảng không thể chối cãi về Imago Dei và Cứu độ học, ba nhánh lớn của Kitô giáo, Công giáo, Chính thống giáo, và Tin Lành, đã phát triển những nhấn mạnh thần học khác biệt. Những khác biệt này không làm suy yếu, mà trái lại, làm phong phú thêm cách thức mỗi truyền thống kiến tạo khung đạo đức xã hội để bảo vệ và thúc đẩy phẩm giá con người trong thực tiễn.6</ScholarlyText></p>
        
        <ComparisonTable 
          title="So Sánh Quan Điểm Thần Học Về Phẩm Giá" 
          columnHeaders={["Công giáo (Catholicism)", "Chính thống giáo (Orthodoxy)", "Tin Lành (Protestantism)"]}
          rows={baTruyenThongRows} 
        />

        <ChapterSection id="cong-giao" number="4.1" title="Công Giáo: Ân Sủng, Tự Do và Cấu Trúc Của Giáo Huấn Xã Hội" level={2}>
          <p><ScholarlyText>Truyền thống Công giáo nhìn nhận phẩm giá con người qua lăng kính của sự hòa hợp nhiệm mầu giữa ân sủng cứu độ và khả năng phản hồi tích cực của ý chí tự do.6 Niềm tin về sự toàn vẹn và giá trị của thế giới vật chất được tạo dựng đã trở thành bệ phóng lý luận cho sự phát triển của Giáo huấn Xã hội Công giáo (Catholic Social Teaching - CST). Khởi nguồn từ Thông điệp Rerum Novarum (1891) của Đức Lêô XIII bảo vệ quyền lợi người lao động, đến Centesimus Annus (1991) của Đức Gioan Phaolô II, CST đã tạo ra một khuôn khổ triết lý và đạo đức chặt chẽ dựa trên các nguyên tắc bất di bất dịch: Phẩm giá nhân vị, Lợi ích chung (Common Good), Tình liên đới (Solidarity), và Tính bổ trợ (Subsidiarity).28</ScholarlyText></p>
          <p><ScholarlyText>Nguyên tắc Tính bổ trợ (Subsidiarity) là một trong những đóng góp triết học chính trị sâu sắc nhất của phương Tây hiện đại, có nguồn gốc từ tư tưởng tự nhiên luật. Nguyên tắc này thiết lập ranh giới luân lý cho quyền lực của nhà nước. Nó khẳng định rằng các quyết định cần được đưa ra ở cấp độ địa phương và thấp nhất có thể, bảo vệ quyền tự quyết và vai trò thiết yếu của các cấu trúc xã hội trung gian (gia đình, hội đoàn, giáo xứ, cộng đồng địa phương) trong việc giải quyết vấn đề của chính họ.28 Tính bổ trợ ngăn chặn xu hướng toàn trị và sự can thiệp quá mức của nhà nước vốn thường làm thui chột sáng kiến và chà đạp lên phẩm giá tự do của con người, đảm bảo rằng quyền lực luôn phục vụ thay vì trị.30</ScholarlyText></p>
        </ChapterSection>

        <ChapterSection id="chinh-thong" number="4.2" title="Chính Thống Giáo: Mầu Nhiệm Theosis và Sự Hiệp Thông Xã Hội" level={2}>
          <p><ScholarlyText>Khác với các mô hình mang đậm tính pháp lý, kinh viện thường thấy ở thần học phương Tây, Chính thống giáo Đông phương tiếp cận phẩm giá con người qua lăng kính của sự Thần hóa (Theosis/Deification).6 Theosis không có nghĩa là con người bị hòa tan vào một lực lượng vũ trụ phi cá nhân (như trong một số triết lý phương Đông), mà là việc nhân vị thực sự tham gia vào sự trọn lành, sự bất diệt của Thiên Chúa thông qua ân sủng và đời sống phụng vụ của cộng đoàn Giáo hội.25 Ở đây, tính "mục đích luận" (teleology) của phẩm giá hiện lên rực rỡ: con người được ban cho tự do cấu trúc cốt để có thể vươn lên, đáp trả tình yêu Thiên Chúa, và qua đó trở thành "những người mà chúng ta được định sẵn để trở thành".25</ScholarlyText></p>
          <p><ScholarlyText>Vào năm 2020, Tòa Thượng Phụ Đại Kết đã công bố văn kiện mang tính bước ngoặt "For the Life of the World" (FLOW) (Cho Sự Sống Thế Gian), đánh dấu một nỗ lực toàn diện trong việc diễn dịch nền tảng Thần hóa siêu việt này vào các vấn đề đạo đức xã hội đương đại.2 Văn kiện này đưa ra một luận điểm táo bạo: ngôn ngữ của nhân quyền hiện đại, dù bề ngoài mang màu sắc thế tục của thời kỳ Khai sáng, thực chất có nguồn gốc sâu xa không thể tách rời khỏi niềm tin của Kitô giáo về giá trị vô giá của linh hồn và lời rao giảng Phúc Âm.2 Nó kêu gọi các tín hữu Chính thống giáo nhiệt thành sử dụng ngôn ngữ nhân quyền này để bảo vệ người nghèo, chống lại bạo lực, bảo vệ tự do ngôn luận, tôn giáo, và quyền lập hội, cũng như chống lại các cấu trúc kinh tế bất công.2 Đối với Chính thống giáo, sự hiệp thông thiêng bảo thực sự không thể tồn tại độc lập khỏi nỗ lực tranh đấu cho hòa bình và công lý trên mặt đất, bởi lẽ một xã hội dung túng sự áp bức là một xã hội đang báng bổ Imago Dei nơi các thành viên của chính nó.32</ScholarlyText></p>
        </ChapterSection>

        <ChapterSection id="tin-lanh" number="4.3" title="Tin Lành: Sự Phục Hồi Nhờ Ân Sủng, Ơn Gọi và Chủ Quyền Từng Vùng" level={2}>
          <p><ScholarlyText>Truyền thống Tin Lành khởi đi từ quan điểm triệt để của các nhà Cải cách thế kỷ 16 về tác động tàn phá của Tội Lỗi Nguyên Thủy (Original Sin). Martin Luther và John Calvin tin rằng sự sa ngã đã làm biến dạng và hủy hoại hoàn toàn Imago Dei dưới khía cạnh năng lực đạo đức nội tại (khái niệm Total Depravity). Theo góc nhìn này, lý trí và ý chí tự nhiên của con người, dù vẫn có khả năng điều hành xã hội dân sự, hoàn toàn bất lực trong việc hiểu thấu, nắm bắt các chân lý thiêng liêng hoặc tự mình đạt được sự công chính trước mặt Thiên Chúa nếu không có sự can thiệp đơn phương của ân sủng (Sola Gratia).41</ScholarlyText></p>
          <p><ScholarlyText>Mặc dù thoạt nhìn có vẻ bi quan về bản tính con người, nền tảng thần học nghiêm ngặt này lại dẫn đến một cách tiếp cận xã hội vô cùng năng động, tôn trọng quyền tự do cá nhân và đề cao trách nhiệm thế tục. Do e ngại sự tha hóa quyền lực, bởi vì mọi hệ thống của con người đều chịu ảnh hưởng của tội lỗi, thần học Tin Lành đã phát triển nguyên tắc Chủ quyền Từng vùng (Sphere Sovereignty).43 Tương tự như Tính bổ trợ của Công giáo, nguyên tắc này khẳng định rằng mọi bình diện của đời sống xã hội (như gia đình, nhà nước, giáo hội) đều có sự tự trị tương đối và thẩm quyền trực tiếp từ Thiên Chúa. Chúng không được phép lấn át hay thôn tính lẫn nhau. Cách tiếp cận này thúc đẩy mạnh mẽ một xã hội dân sự đa nguyên, nơi nhân phẩm được bảo vệ bằng cách ngăn chặn sự tập trung quyền lực tuyệt đối vào bất kỳ tổ chức hay định chế nào.36 Thêm vào đó, phong trào "Tin Lành Xã hội" (Social Gospel) đã biến niềm tin này thành hành động cụ thể.44 Họ tập trung không chỉ vào cứu rỗi cá nhân mà còn vào việc kiến tạo vương quốc Thiên Chúa trên mặt đất bằng việc cải thiện điều kiện lao động và chống lại bất công.</ScholarlyText></p>
        </ChapterSection>
      </ChapterSection>

      <ChapterDivider />

      <ChapterSection id="lien-doi" number="5" title="Sự Mở Rộng Phẩm Giá: Nguyên Tắc Liên Đới (Solidarity) và Lợi Ích Chung" isFirst>
        <p><ScholarlyText>Một sự thấu hiểu sâu sắc về Imago Dei không cho phép con người dừng lại ở sự tự mãn nội tâm, mà tự động dẫn đến việc từ chối chủ nghĩa cá nhân hẹp hòi, chủ nghĩa vị kỷ. Phẩm giá không phải là một chiến hào cá nhân để phòng thủ, mà là một nhịp cầu tạo ra mạng lưới các nghĩa vụ đạo đức hỗ trợ lẫn nhau. Điều này được biểu đạt mạnh mẽ nhất qua khái niệm Liên đới (Solidarity), một trụ cột của thần học luân lý xã hội.46</ScholarlyText></p>
        <p><ScholarlyText>Tình liên đới bắt nguồn từ nhận thức thiêng liêng rằng toàn thể nhân loại, vượt lên trên mọi ranh giới quốc gia, chủng tộc hay ý thức hệ, làm thành một gia đình duy nhất, phụ thuộc lẫn nhau một cách tất yếu cả về vận mệnh vật chất lẫn tinh thần. Dưới nhãn quan của Thần học Luân lý, sự liên đới không chỉ là một cơ hội xót thương mơ hồ, một sự thương hại thoảng qua trước nỗi đau của người khác, mà là một "đức tính Kitô giáo" thực thụ, đòi hỏi hành động cấu trúc (structural action).47 Đức Giáo Hoàng Gioan Phaolô II đã nhiều lần nhấn mạnh rằng việc từ chối liên đới và lùi bước vào "sự cô lập ích kỷ" không chỉ là sự phản bội lại những kỳ vọng chính đáng của nhân loại mà còn là sự đào ngũ khỏi một nghĩa vụ đạo đức tối hậu do Phúc Âm đòi hỏi.49</ScholarlyText></p>
        <p><ScholarlyText>Trong thực tiễn chính trị và xã hội, sự liên đới đòi hỏi một sự "lựa chọn ưu tiên dành cho người nghèo" (preferential option for the poor and vulnerable). Nó tạo ra một tiêu chuẩn đo lường đạo đức khắt khe: tính chính đáng của bất kỳ hệ thống kinh tế, pháp luật hay xã hội nào không được đánh giá dựa trên sự thịnh vượng của giới tinh hoa, mà dựa trên cách thức hệ thống đó đối xử với những thành viên yếu thế nhất, dễ bị tổn thương nhất.44 Khi sự giàu có và quyền lực bị tập trung quá mức, gây ra những bất bình đẳng mang tính hệ thống, đó là lúc phẩm giá của cả người bị áp bức (vì bị chà đạp những quyền cơ bản) và người áp bức (vì làm hoen ố hình ảnh Thiên Chúa nơi chính mình do sự vô cảm) đều bị tổn thương nghiêm trọng.68</ScholarlyText></p>
      </ChapterSection>

      <ChapterDivider />

      <ChapterSection id="thach-thuc" number="6" title="Những Thách Thức Đương Đại Đối Với Phẩm Giá Con Người" isFirst>
        <p><ScholarlyText>Thế kỷ 21 đang chứng kiến những sự chuyển dịch vĩ mô chưa từng có trong lịch sử, từ sự đột phá của công nghệ tính toán đến các kỹ thuật nhận thức sinh học. Những tiến bộ này, bên cạnh những lợi ích to lớn, đang tạo ra những áp lực chưa từng có lên định nghĩa và sự sinh tồn của bản tính con người.10</ScholarlyText></p>

        <ComparisonTable 
          title="Đối Diện Với Thách Thức Công Nghệ và Sinh Học" 
          columnHeaders={["Công giáo", "Chính thống giáo", "Tin Lành"]}
          rows={thachThucRows} 
        />

        <ChapterSection id="ai-transhumanism" number="6.1" title="Trí Tuệ Nhân Tạo (AI) và Chủ Nghĩa Siêu Nhân Học (Transhumanism)" level={2}>
          <p><ScholarlyText>Sự bùng nổ của Trí tuệ Nhân tạo (Artificial Intelligence) và các hệ tư tưởng Siêu nhân học (Transhumanism) không chỉ là các vấn đề kỹ thuật, mà đang đặt ra một cuộc khủng hoảng trực tiếp về mặt "hữu thể học" (ontological reality). Khi các cỗ máy và thuật toán ngày càng tinh vi, có thể sáng tác thơ ca, phân tích dữ liệu y khoa phức tạp, vượt qua các kỳ thi triết học, và thậm chí mô phỏng hoàn hảo ngôn ngữ cảm xúc của con người, ranh giới mỏng manh giữa cái "người" và cái "máy" dường như đang bị xóa nhòa trong nhận thức của công chúng.76</ScholarlyText></p>
          <p><ScholarlyText>Triết học phương Tây truyền thống, vốn dựa trên mệnh đề nổi tiếng của René Descartes "Tôi tư duy, nên tôi hiện hữu" (Cogito, ergo sum), bỗng chốc trở nên chông chênh. Bởi lẽ, nếu tư duy thuần túy là dấu hiệu duy nhất của sự hiện hữu, thì AI rõ ràng có thể mô phỏng một dạng "tư duy" cực kỳ sắc bén. Tuy nhiên, nhân học Kitô giáo cung cấp một bộ lọc đánh giá mạnh mẽ và toàn diện hơn nhiều. Dựa trên sự phê bình của Gassendi đối với Descartes, các nhà thần học khẳng định rằng, trong khi AI thực hiện các hoạt động tính toán và xử lý thông tin (processing) một cách phi thường, nó hoàn toàn trống rỗng và thiếu vắng một chủ thể "Tôi" (subjecthood) trải nghiệm các hoạt động đó. Khái niệm nhân vị (personhood) trong Kitô giáo, được xây dựng trên nền tảng Imago Dei, không thể bị tối giản và quy giản thành khả năng tính toán hay quản trị thông tin. Nhân vị đích thực đòi hỏi ba yếu tố không thể chia cắt: Tính hiện thân (Embodiment), Tính tương quan (Relationality), và Tính dễ bị tổn thương (Vulnerability).77</ScholarlyText></p>
          <p><ScholarlyText>Trong khi lý tưởng của Chủ nghĩa Siêu nhân học (Transhumanism) là dùng công nghệ để vượt qua mọi giới hạn sinh học, thoát khỏi sự lão hóa và đạt tới một dạng bất tử vật lý hoặc tải ý thức lên không gian kỹ thuật số, đạo đức Kitô giáo lại xem tính hữu hạn, sự mong manh, giới hạn của thể xác, và thậm chí cái chết là những yếu tố thiết yếu để hiểu cách sống đúng đắn với nhân phẩm. Trí tuệ con người chia sẻ bản chất với Lý trí Thần linh (Divine Reason) và mang trong mình khả năng hiệp thông thiêng bảo với Thiên Chúa thông qua Chúa Thánh Thần, điều mà không một cỗ máy, một mô hình ngôn ngữ lớn (LLM), hay một thuật toán vô cơ nào, dù thông minh đến đâu, có khả năng tiếp nhận. Từ đó, để ứng phó với sự thao túng của thuật toán, Tòa Thánh Vatican và các nhà tư tưởng Kitô giáo đã đề xuất khái niệm "Algor-ethics" (Đạo đức học Thuật toán). Khung đạo đức này đòi hỏi phải đảm bảo tính minh bạch, sự chịu trách nhiệm, và nguyên tắc rằng AI chỉ được phép sử dụng như một công cụ hỗ trợ cho sự phát triển của công ích và y tế, tuyệt đối không được làm xói mòn quyền tự quyết, sự sáng tạo và giá trị duy nhất của sự sống con người.78</ScholarlyText></p>
        </ChapterSection>

        <ChapterSection id="dao-duc-sinh-hoc" number="6.2" title="Đạo Đức Sinh Học: Mang Thai Hộ, Thụ Tinh Ống Nghiệm (IVF) và Lý Thuyết Giới Tính" level={2}>
          <p><ScholarlyText>Việc sử dụng công nghệ y sinh để can thiệp, thao túng sự sống con người ngay từ lúc khởi đầu trong ống nghiệm cho đến khi kết thúc là một mặt trận luân lý khốc liệt khác. Vào năm 2024, Bộ Giáo lý Đức tin của Vatican đã ban hành Tuyên ngôn Dignitas Infinita (Phẩm giá Vô biên), tái khẳng định một cách đanh thép quan điểm của Giáo hội Công giáo về các mối đe dọa đương đại.57 Đồng thời, các nhánh Chính thống giáo và Tin Lành cũng đưa ra những phản ứng luân lý đa dạng nhưng sâu sắc đối với các vấn đề này.</ScholarlyText></p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-foreground/90">
            <li><strong>Mang Thai Hộ (Surrogacy):</strong> <ScholarlyText>Cả Công giáo và Chính thống giáo đều kịch liệt lên án thực hành này.15 Tuyên ngôn Dignitas Infinita nhấn mạnh rằng việc mang thai hộ đã biến trẻ em thành món hàng có thể thương lượng.58 Việc này chà đạp lên quyền lợi tự nhiên của đứa trẻ và xúc phạm phẩm giá của người phụ nữ mang thai.63 Trong khi đó, cộng đồng Tin Lành có cái nhìn đa chiều hơn.64 Một số chấp nhận mang thai hộ nếu quá trình được thực hiện minh bạch, tôn trọng nhân phẩm các bên và không nhằm mục đích trục lợi.66</ScholarlyText></li>
            <li><strong>Bảo Vệ Sự Sống Bào Thai và IVF:</strong> <ScholarlyText>Mọi truyền thống lớn của Kitô giáo đều xác nhận phẩm giá của sự sống ngay từ lúc thụ thai.16 Việc phá thai hoặc tiêu hủy phôi dư thừa trong IVF bị xem là cuộc tấn công trực diện vào nhân phẩm.67 Sự chọn lọc phôi thai được đánh giá là một hình thức ưu sinh nguy hiểm.60 Phán quyết năm 2024 của Tòa án Tối cao Alabama đã minh chứng cho sự căng thẳng này giữa đạo đức tôn giáo và luật pháp thế tục.</ScholarlyText></li>
            <li><strong>Lý Thuyết Giới Tính:</strong> <ScholarlyText>Tuyên ngôn Dignitas Infinita phê phán sâu sắc lý thuyết giới tính hiện đại, xem nỗ lực tự quyết giới tính độc lập với cấu trúc sinh học là sự phủ nhận thân phận thụ tạo.69 Thể xác và tính nhị nguyên giới (nam-nữ) là món quà thiêng liêng đòi hỏi sự tôn trọng.57</ScholarlyText></li>
          </ul>
        </ChapterSection>

        <ChapterSection id="chien-tranh" number="6.3" title="Chiến Tranh, Bạo Lực Cơ Cấu và Đói Nghèo" level={2}>
          <p><ScholarlyText>Phẩm giá con người thường bị tổn thương nghiêm trọng nhất trong các bối cảnh bạo lực cực đoan. Chiến tranh không chỉ hủy diệt mạng sống thể lý mà còn tước đoạt môi trường sống cần thiết để con người phát triển nhân phẩm. Giáo huấn Kitô giáo kêu gọi một sự liên đới toàn cầu để chấm dứt các cuộc xung đột vũ trang và giải quyết những nguyên nhân gốc rễ của bạo lực cơ cấu và đói nghèo kinh niên.44</ScholarlyText></p>
        </ChapterSection>
      </ChapterSection>

      <ChapterDivider />

      <ChapterSection id="viet-nam" number="7" title="Hiện Thực Hóa Phẩm Giá Con Người: Bối Cảnh Tại Việt Nam" isFirst>
        <p><ScholarlyText>Việc hiện thực hóa những lý thuyết thần học toàn cầu về phẩm giá con người đòi hỏi phải được soi chiếu qua những bối cảnh lịch sử, chính trị và xã hội cụ thể. Tại Việt Nam, một quốc gia đa dạng về tín ngưỡng với đa số dân chúng chịu ảnh hưởng sâu sắc của truyền thống Phật giáo (hơn 14 triệu tín đồ) và tín ngưỡng thờ cúng tổ tiên, Kitô giáo (bao gồm Công giáo và Tin Lành) đại diện cho những cộng đồng tuy thiểu số (khoảng 7-8% dân số) nhưng có cấu trúc tổ chức chặt chẽ và sức sống tâm linh mãnh liệt.12 Cả Giáo hội Công giáo và cộng đồng Tin Lành đều có những đóng góp vô cùng độc đáo trong việc bảo vệ và thăng tiến nhân phẩm thông qua việc tương tác liên tục với xã hội và nhà nước.</ScholarlyText></p>

        <ChapterSection id="di-san" number="7.1" title="Di sản Lịch Sử, Sự Đau Khổ và Thích Ứng" level={2}>
          <p><ScholarlyText>Lịch sử của Kitô giáo tại Việt Nam là một thiên sử thi gắn liền với sự kiên cường trong việc duy trì căn tính đức tin trước muôn vàn áp lực chính trị. Từ thời kỳ mở rộng truyền giáo dưới thời Giám mục Pigneau de Behaine và vua Gia Long, đến giai đoạn chịu bách hại khốc liệt dưới triều đại Minh Mạng, cộng đồng Công giáo đã chứng minh rằng phẩm giá con người gắn liền với quyền tự do lương tâm.11 Sự liên kết giữa nỗi đau khổ của người tín hữu Việt Nam và cuộc Thương Khó của Đức Kitô được thể hiện một cách sống động qua các buổi trình diễn Thương Khó (Passion Plays) tại các giáo xứ ngày nay, minh chứng cho một nền thần học về sự chịu đựng và hy vọng.</ScholarlyText></p>
          <p><ScholarlyText>Trong thế kỷ 20, đứng trước sự biến động của ý thức hệ, Giáo hội đã có những lập trường rõ ràng. Điển hình là Thư Chung của Hội đồng Giám mục Đông Dương năm 1951 tại Hà Nội, trong đó các Giám mục đã mạnh mẽ cảnh báo về những nguy cơ của các ý thức hệ vô thần đối với các quyền cơ bản của cá nhân và nền tảng gia đình, tạo ra một định hướng ứng xử đối với thể chế chính trị ảnh hưởng sâu sắc đến thái độ của người Công giáo trong nhiều thập kỷ.78</ScholarlyText></p>
          <p><ScholarlyText>Trong bối cảnh đương đại, quyền tự do tôn giáo và các nỗ lực bảo vệ nhân phẩm tại Việt Nam thường được diễn giải thông qua một lăng kính kép của nhà nước: quản lý an ninh và ổn định xã hội.76 Theo báo cáo về tự do tôn giáo, một số phong trào và nhóm tôn giáo độc lập, chưa được công nhận (như Tin Lành Đê-ga ở Tây Nguyên, các nhóm H'Mông ở miền núi phía Bắc, hay Công giáo Hà Mòn) đôi khi vẫn phải đối mặt với áp lực gay gắt từ chính quyền địa phương, bị truyền thông nhà nước gắn mác là "tà đạo", "hoạt động mê tín", hoặc bị cáo buộc vi phạm trật tự xã hội và ly khai chính trị.76</ScholarlyText></p>
          <p><ScholarlyText>Mặc dù vẫn tồn tại những căng thẳng ở mức độ nhất định, bức tranh toàn cảnh đang cho thấy một sự dịch chuyển tích cực. Có một xu hướng ngày càng tăng trong việc Nhà nước thừa nhận năng lực xã hội và tạo không gian pháp lý cho các tổ chức tôn giáo tham gia vào mảng dịch vụ cộng đồng.12 Các tổ chức Kitô giáo hiện đang âm thầm nhưng hiệu quả quản lý hàng trăm cơ sở mầm non, hàng ngàn cơ sở giáo dục sớm, các trung tâm dạy nghề, cơ sở y tế từ thiện, và các mái ấm chăm sóc trẻ mồ côi hay người khuyết tật trên khắp cả nước. Việc mở rộng không gian phục vụ này chính là sự biểu đạt rõ ràng và cụ thể nhất về nỗ lực không ngừng nghỉ nhằm bảo vệ những cá nhân yếu thế, duy trì giá trị của Imago Dei trong cuộc sống thực tế thay vì chỉ trên bục giảng.78</ScholarlyText></p>
        </ChapterSection>

        <ChapterSection id="da-dang-vn" number="7.2" title="Sự Đa Dạng Trong Tiếp Cận Phục Vụ Giữa Công Giáo và Tin Lành" level={2}>
          <p><ScholarlyText>Sự khác biệt về nền tảng thần học giữa Công giáo và Tin Lành (như đã phân tích ở phần 4) không chỉ dừng lại ở lý thuyết mà còn được phản ánh sinh động qua cách thức các cộng đoàn này tiếp cận với người nghèo và giải quyết các vấn đề xã hội tại Việt Nam.44</ScholarlyText></p>
          <p><ScholarlyText>Các nghiên cứu xã hội học quốc tế cho thấy, mặc dù tín hữu của cả hai truyền thống đều đồng thuận sâu sắc rằng cá nhân và nhà nước có trách nhiệm luân lý trong việc giúp đỡ người gặp khó khăn, phương thức thực hiện ưu tiên lại có sự phân kỳ.</ScholarlyText></p>
          
          <ComparisonTable 
            title="Phương thức Tiếp cận Xã hội tại Việt Nam" 
            columnHeaders={["Cộng đồng Công giáo", "Cộng đồng Tin Lành"]}
            rows={tiepCanPhucVuRows} 
          />

          <p><ScholarlyText>Dù có sự khác biệt về chiến lược và mức độ ưu tiên giữa việc cung cấp "bánh mì" thể lý hay "bánh hằng sống" tâm linh, tựu trung lại, cả hai truyền thống đều kiên định trong việc từ chối xem sự nghèo đói là định mệnh an bài. Cùng nhau, họ cung cấp một đối trọng đạo đức quan trọng, chống lại xu hướng vật hóa con người và chủ nghĩa tiêu thụ trong một xã hội Việt Nam đang trong quá trình công nghiệp hóa và hội nhập toàn cầu nhanh chóng.</ScholarlyText></p>
        </ChapterSection>
      </ChapterSection>

      <ChapterDivider />

      <ChapterSection id="ket-luan" number="8" title="Kết Luận">
        <p><ScholarlyText>Nghiên cứu sâu rộng về chủ đề phẩm giá con người dưới nhãn quan Kitô giáo bộc lộ một kiến trúc triết lý và thần học vĩ đại, được xây dựng vững chắc từ nền tảng của Mầu nhiệm Sáng tạo (Imago Dei) và được kiện toàn qua Mầu nhiệm Cứu chuộc (Sự Nhập thể và Phục sinh của Đức Kitô). Phẩm giá này không phải là một phát minh của con người, mà mang tính chất khách quan, nội tại, bất khả nhượng và hoàn toàn phổ quát. Nó phá vỡ và vô hiệu hóa mọi tiêu chuẩn phân loại mang tính thế tục và thực dụng vốn thường dựa trên năng lực trí tuệ, khả năng đóng góp kinh tế, hay sự hoàn hảo về thể xác.10</ScholarlyText></p>
        <p><ScholarlyText>Việc đi sâu vào sự phong phú của ba truyền thống lớn, Công giáo, Chính thống giáo và Tin Lành, cho thấy rằng, bất chấp những khác biệt lịch sử về cứu độ học, ân sủng, hay cấu trúc tổ chức xã hội, có một sự đồng thuận tuyệt đối và mạnh mẽ trong việc bảo vệ con người trước các rủi ro của quyền lực và cấu trúc tội lỗi. Dù được gọi là nguyên tắc Tính bổ trợ (Subsidiarity), Chủ quyền Từng vùng (Sphere Sovereignty), hay nỗ lực hiệp thông trong tiến trình Thần hóa (Theosis), tất cả đều hội tụ ở một điểm chung duy nhất: bảo vệ sự toàn vẹn của tự do cá nhân và sự bền vững của cộng đồng trước sự tha hóa.6</ScholarlyText></p>
        <p><ScholarlyText>Trong kỷ nguyên của thế kỷ 21, khi nhân loại đang phải đối diện với những hệ hình mới mẻ và vô cùng nguy hiểm, từ sự trỗi dậy của Trí tuệ Nhân tạo thách thức định nghĩa về ý thức, sự can thiệp biến đổi bản tính sinh học thông qua mang thai hộ thương mại và lý thuyết giới tính, cho đến thảm họa từ chiến tranh, bạo lực cơ cấu và suy thoái sinh thái toàn cầu, giáo huấn của Kitô giáo tiếp tục đóng vai trò như một mỏ neo đạo đức kiên cố.57 Từ các văn kiện mang tầm vóc lịch sử toàn cầu như Dignitas Infinita hay For the Life of the World, cho đến những hoạt động thiện nguyện thầm lặng nhưng đầy tính liên đới tại các trại phong, mái ấm mồ côi hay trường học do các tu sĩ và mục sư quản lý tại Việt Nam, Kitô giáo không ngừng truyền tải một chân lý cốt lõi bất diệt. Chân lý đó là: Con người là một huyền nhiệm thiêng liêng được đan dệt bởi tình yêu thần linh, và vì lẽ đó, việc bảo vệ phẩm giá của mỗi con người, đặc biệt là những người bé mọn nhất, cũng chính là hành vi thờ phượng Đấng Sáng Tạo một cách đích thực và trọn vẹn nhất. Nhận thức sâu xa này không chỉ là lời cảnh tỉnh gay gắt đối với các xu hướng tha hóa của xã hội hiện đại, mà còn là một bản thiết kế đầy hy vọng để xây dựng một nền văn minh tình thương và sự thật cho tương lai nhân loại.</ScholarlyText></p>
      </ChapterSection>

      <CitationList />
    </article>
  );
}
