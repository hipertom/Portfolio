<?php
function main(array $args) : array
{
    $type = $args['sys']['type'];
    $bundle = $args['sys']['contentType']['sys']['id'];

    if ($type == 'Entry' && $bundle == 'project') {
        if (!empty($args['fields']['screenshotUrl'])) {
            $screenshot_url = $args['fields']['screenshotUrl'];
            $locale = array_key_first($screenshot_url);
            if (!empty($screenshot_url[$locale])) {
                $screenshot_url = $screenshot_url[$locale];
                $project_id = $args['sys']['id'];

                $query_params = [
                  'access_key' => "jaD10XXqUpRbww",
                  'url' => $screenshot_url,
                  'full_page' => "false",
                  'viewport_width' => "1512",
                  'viewport_height' => "823",
                  'device_scale_factor' => "1",
                  'format' => "jpg",
                  'image_quality' => "80",
                  'block_ads' => "true",
                  'block_cookie_banners' => "true",
                  'block_banners_by_heuristics' => "false",
                  'block_trackers' => "true",
                  'delay' => "1",
                  'timeout' => "10",
                  'store' => "true",
                  // 'storage_path' => 'screenshots/' . $project_id,
                  'async' => "true",
                ];
                $screenshotone_url = "https://api.screenshotone.com/take";
                $url_parameters = http_build_query($query_params);
                $request_url = "{$screenshotone_url}?{$url_parameters}&storage_path=screenshots/{$project_id}";

                $response = file_get_contents($request_url);

                if ($response !== false) {
                  return ["body" => $link_url];
                }
            }
        }
    }

    return ["body" => 'EOF: something went wrong!'];
}
